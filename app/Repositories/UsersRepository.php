<?php 

namespace Idea\Repositories;

use Idea\Models\User;

class UsersRepository extends Repository{


	public function __construct(User $user) {
		$this->model = $user;

	}

	public function one($alias) {
		
		$result = parent::one($alias);
		
		if ($result) {
			$result->load('jobs', 'articles');
			$result->articles->load('status', 'issue');

		}

		return $result;
	}

	/*
	*
	*	Get all users with meta mapped by Locale
	*
	*/
	public function all() {
		$result = parent::all();
		$result->loadMissing('meta');
		return $result;
	}

	public function filerUserArticlesByStatus(User $user, $status = '*') {
		if ($status && $status !== '*') {
			$user->articles = $user->articles->filter(function($article) use ($status) {
				return $article->status->name === $status;
			});
		}
		return $user;
	}
	
	public function create($data) {
// 		if (\Gate::denies('create',$this->model)) {
//             abort(403);
//         }
		
		$user = $this->model->make([
            'alias' => $data['alias'],
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

}