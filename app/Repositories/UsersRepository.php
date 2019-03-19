<?php

namespace Idea\Repositories;

use DB;
use Idea\Models\User;

use Transliterate;

class UsersRepository extends Repository
{

    public function __construct(User $user)
    {
        $this->model = $user;

    }

    public function one($alias)
    {

        $result = parent::one($alias);

        if ($result) {
            $result->load('jobs', 'articles');
            $result->articles->load('status', 'issue');

        }

        return $result;
    }

    /*
     *
     *    Get all users with select
     *
     */
    public function get(
        $select = '*',
        $where = false,
        $orderBy = false,
        $pagination = ''
    ) {
        $result = parent::get(
            $select = $select,
            $where = $where,
            $orderBy = $orderBy,
            $pagination = $pagination
        );
        if ($result) {
            $result->load('meta');
            $result->load('articles');
        }

        return $result;
    }

    /*
     *
     *    Get users with conditions
     *        search in:
     *                 full_name
     *                 email
     *          for resources
     */
    public function getUsersList(\Illuminate\Http\Request $request) {
        $paginate = ($request->input('paginate')) ? $request->input('paginate') : '';
        $search = ($request->input('search')) ? $request->input('search') : '';
        $sortBy = ($request->input('sortBy')) ? $request->input('sortBy') : '';
        $orderBy = ($request->input('orderBy')) ? $request->input('orderBy') : '';

        $users_id = $this->getSortedIdArray($search, $sortBy, $orderBy);

        $users = User::whereIn('id', $users_id)
                    ->with(['meta', 'articles'])
                    ->orderByRaw("FIELD(id, ".implode(",",$users_id).")")
                    ->paginate($paginate);

        return $users;

    }
  
    private function getSortedIdArray ($search = '', $sortBy = 'full_name', $orderBy = 'asc', $role = 'author') {
        switch ($sortBy) {
            // sort by atricle_user table
            case 'articles_count':
            $users_id_articles_sorted = DB::table('users')
                    ->leftjoin("article_user as a", 'users.id', '=', 'a.user_id')
                    ->where('users.role', $role)
                    ->selectRaw("users.id, count(a.user_id) as $sortBy" )
                    ->orderBy($sortBy, $orderBy)
                    ->groupBy('users.id')
                    ->pluck('users.id')->unique()->toArray();

            $users_id_searched = DB::table('users')
                    ->leftjoin('meta_users', 'users.id', '=', 'meta_users.user_id')
                    ->where('users.role', $role)
                    ->where(function($query) use ($search) {
                        $query->where('email', 'like', "%".$search."%")
                              ->orWhere('full_name', 'like', "%".$search."%");
                    })
                    ->groupBy('users.id')
                    ->pluck('users.id')->unique()->toArray();

            $users_id = array_intersect($users_id_articles_sorted, $users_id_searched);

                break;
                
            // sort by users, meta_users tables
            default:
                $users_id = DB::table('users')
                    ->leftjoin('meta_users', 'users.id', '=', 'meta_users.user_id')
                    // ->leftjoin('article_user as a', 'users.id', '=', 'article_user.user_id')
                    //->selectRaw('users.*, count(a.user_id) as a_count' )
                    ->where('users.role', $role)
                    ->where(function($query) use ($search) {
                        $query->where('email', 'like', "%".$search."%")
                              ->orWhere('full_name', 'like', "%".$search."%");
                    })
                    ->orderBy($sortBy, $orderBy)
                    ->groupBy('users.id')
                    ->pluck('users.id')->unique()->toArray();
                break;
        }
        return $users_id;
    }

    /*
     *
     *    Get all users with meta mapped by Locale
     *
     */
    public function all($relationsip = [])
    {
        $result = parent::all();
        $result->loadMissing($relationsip);
        // foreach ($relationsip as $model) {
        // $result->loadMissing($model);
        // }

        return $result;
    }

    public function filerUserArticlesByStatus(User $user, $status = '*')
    {
        if ($status && $status !== '*') {
            $user->articles = $user->articles->filter(function ($article) use ($status) {
                return $article->status->name === $status;
            });
        }
        return $user;
    }

    public function create($data)
    {
        $alias = $data['alias'] ?: Transliterate::make($data['full_name'], ['type' => 'url', 'lowercase' => true]);
        $user = $this->model->make([
            'alias' => $alias,
            'email' => $data['email'],
            'password' => bcrypt('123'),
            'role' => 'author',
            'orcid' => (isset($data['orcid'])) ? $data['orcid'] : null,
        ]);

        if ($data['avatar'] > 0) {
            $user->avatar()->associate($data['avatar']);
        } else {
            $user->avatar()->dissociate();
        }

        $user->save();

        $user->meta()->create([
            'lang' => 'ru',
            'full_name' => $data['full_name'],
            'first_name' => $data['first_name_ru'],
            'last_name' => $data['last_name_ru'],
            'patronymic' => $data['patronymic_ru'],
            'initials' => $data['initials_ru'],
//             'post' => $data['full_name'],
            //             'description' => $data['full_name'],
        ]);

        $en_name = $data['last_name_en'];
        $en_name .= ($data['first_name_en']) ? " " . $data['first_name_en'] : "";
        $en_name .= ($data['patronymic_en']) ? " " . $data['patronymic_en'] : "";

        $user->meta()->create([
            'lang' => 'en',
            'full_name' => $en_name,
            'first_name' => $data['first_name_en'],
            'last_name' => $data['last_name_en'],
            'patronymic' => $data['patronymic_en'],
            'initials' => $data['initials_en'],
//             'post' => $data['full_name'],
            //             'description' => $data['full_name'],
        ]);

        return ['status' => 'Пользователь добавлен'];
    }
  
    public function deleteUser($user) {

      $user->articles()->detach();
      $user->avatar()->dissociate();

      if($user->delete()) {
        return ['status' => 'success',
                'message' => 'Пользователь удален'];	
      } else {
        return ['status' => 'error',
                'message' => 'Что-то пошло не так'];	
      }
    }

}
