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

}