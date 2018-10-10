<?php 

namespace Idea\Repositories;

use Idea\Models\Article;

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


	public function deleteArticle(Article $article)
	{

		if ($article->delete()) {
			return ['status' => 'Материал удален'];
		}


	}

}