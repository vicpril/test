<?php 

namespace App\Repositories;

use DB;
use App\Models\Article;

class ArticlesRepository extends Repository{


	public function __construct(Article $article) {
		$this->model = $article;

	}

	public function one($alias, $lang = 'ru') {
		
		$result = parent::one($alias);
		
		if ($result) {
			$result->load(['status', 
							'users' => function($query) {$query->with('meta');}, 
							'categories', 
							'tags', 
							'issue', 
							'meta']);
                $prop = $result->meta->where('lang', $lang)->first()->getAttributes();
                $result->setRawAttributes(array_merge($result->getAttributes(), $prop));
		}

		return $result;
	}

	public function getAll($nbrPages, $parameters) 
	{
		return $this->model
				->with(['status', 
							'users' => function($query) {$query->with('meta');}, 
							'categories', 
							'tags', 
							'issue', 
							'meta'])
				->orderBy($parameters['order'], $parameters['direction'])
				->paginate ($nbrPages);
	}

	
	
	/*
	 *
	 *    Get articles with conditions
	 *        search in:
	 *                title
	 *                issue: year, tom, no, part
	 *								status: title_ru,
	 *								users: short_name
	 *    For resources
	 */
	public function getArticlesList(\Illuminate\Http\Request $request) {
			$paginate = ($request->input('paginate')) ? $request->input('paginate') : '';
			$search = ($request->input('search')) ? $request->input('search') : '';
			$sortBy = ($request->input('sortBy')) ? $request->input('sortBy') : 'id';
			$orderBy = ($request->input('orderBy')) ? $request->input('orderBy') : 'asc';

			$articles_id = $this->getSortedIdArray($search, $sortBy, $orderBy);

			$articles = Article::whereIn('id', $articles_id)
									->with([
										'meta', 
										'status', 
										'issue',
										'tags',
										'categories',
										'users' => function($query) {
											$query->with('meta');
										}
									])
//                     ->orderByRaw("FIELD(id, ".implode(",",$articles_id).")")
									->paginate($paginate);

			return $articles;

	}
	
	private function getSortedIdArray ($search = '', $sortBy = 'title', $orderBy = 'asc') {
        switch ($sortBy) {
            // sort by atricle_user table
//             case 'articles_count':
//             $users_id_articles_sorted = DB::table('users')
//                     ->leftjoin("article_user as a", 'users.id', '=', 'a.user_id')
//                     ->where('users.role', $role)
//                     ->selectRaw("users.id, count(a.user_id) as $sortBy" )
//                     ->orderBy($sortBy, $orderBy)
//                     ->groupBy('users.id')
//                     ->pluck('users.id')->unique()->toArray();

//             $users_id_searched = DB::table('users')
//                     ->leftjoin('meta_users', 'users.id', '=', 'meta_users.user_id')
//                     ->where('users.role', $role)
//                     ->where(function($query) use ($search) {
//                         $query->where('email', 'like', "%".$search."%")
//                               ->orWhere('full_name', 'like', "%".$search."%");
//                     })
//                     ->groupBy('users.id')
//                     ->pluck('users.id')->unique()->toArray();

//             $users_id = array_intersect($users_id_articles_sorted, $users_id_searched);

//             break;
                
            // sort by users, meta_users tables
            default:
                $users_id = DB::table('articles')
                    ->leftjoin('meta_articles', 'articles.id', '=', 'meta_articles.article_id')
                    ->leftjoin('status', 'articles.status_id', '=', 'status.id')
                    ->leftjoin('issues', 'articles.issue_id', '=', 'issues.id')
                    ->leftjoin('article_user', 'articles.id', '=', 'article_user.article_id')
                    ->leftjoin('users', 'users.id', '=', 'article_user.user_id')
									  ->leftjoin('meta_users', 'users.id', '=', 'meta_users.user_id')
									  ->leftjoin('article_category', 'articles.id', '=', 'article_category.article_id')
									  ->leftjoin('categories', 'categories.id', '=', 'article_category.category_id')
										->leftjoin('article_tag', 'articles.id', '=', 'article_tag.article_id')
									  ->leftjoin('tags', 'tags.id', '=', 'article_tag.tag_id')
	/*        search in:
	 *                title
	 *                issue: year, tom, no, part
	 *								status: title_ru,
	 *								users: short_name,
	 *								categories: title_ru,
	 *								tags: title_ru,
		*/
                    ->where(function($query) use ($search) {
                        $query->where('meta_articles.title', 'like', "%".$search."%")
                              ->orWhere('status.title_ru', 'like', "%".$search."%")
                              ->orWhere('issues.year', 'like', "%".$search."%")
                              ->orWhere('issues.tom', 'like', "%".$search."%")
                              ->orWhere('issues.no', 'like', "%".$search."%")
                              ->orWhere('issues.part', 'like', "%".$search."%")
                              ->orWhere('meta_users.short_name', 'like', "%".$search."%")
															->orWhere('categories.title_ru', 'like', "%".$search."%")
															->orWhere('tags.title_ru', 'like', "%".$search."%");
                    })



                    // ->leftjoin('article_user as a', 'users.id', '=', 'article_user.user_id')
                    //->selectRaw('users.*, count(a.user_id) as a_count' )
//                     ->where('articles.role', $role)
//                     ->orderBy($sortBy, $orderBy)
                    ->groupBy('articles.id')
                    ->pluck('articles.id')->unique()->toArray();
                break;
        }
        return $users_id;
    }
	
	
	
	

	public function deleteArticle(Article $article)
	{

		if ($article->delete()) {
			return ['status' => 'Материал удален'];
		}
	}

}