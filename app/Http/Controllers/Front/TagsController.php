<?php

namespace App\Http\Controllers\Front;

use App\Models\Tag;
use App\Models\Article;
use Illuminate\Http\Request;
use App\Repositories\TagsRepository;
use App\Repositories\ArticlesRepository;

class TagsController extends SiteController
{
    //
    public function __construct(ArticlesRepository $a_rep) {
				parent::__construct(
            new \App\Repositories\MenusRepository(new \App\Models\Menu),
            new \App\Repositories\TagsRepository(new \App\Models\Tag)
        );
			
				$this->a_rep = $a_rep;
			
				$this->show_stol_menu = (config('app.locale') == 'ru') ? true : false;
			

		}

	public function show (Tag $tag) {
		
			$this->setStatus();
		
			$this->prepareStolMenu();
		
// 			$articles = Article::whereHas('tags', function($query) use ($tag){
// 					return $query->where('alias', $tag->alias);
// 			})->get();
		
// 			$articles = Article::tags()->where('alias', $tag->alias)
// 												 ->where('status.title_en', $this->status );
// 			$articles = Article::byTag($tag->alias)->get();
			$articles = $this->a_rep->getBy(['tags', $tag->alias], $this->status, 10);
		
			
			dump($articles);
// 			$tag->loadMissing([
// 					'articles',
// 					'articles.status',
// 					'articles.meta',
// 					'articles.users',
// 					'articles.users.meta'
// 			]);
			$tag = ($this->onlyPublished) ? $tag->published() : $tag;
			dd($tag->articles);
		
			$this->template = 'front.tags';
		
			$this->title = __('Тема: :tag', ['tag' => $tag->loc]);
		
			$this->vars = array_add($this->vars, 'articles', $tag->articles);

			return $this->renderOutput();
	}

// 	public function getTag($alias, $articleStatus = '*') {
// 		$tag = $this->t_rep->one($alias);

// 		if ($tag) {
// 			$tag->load(['articles' => function($query){
//                                     $query->with('status', 'users', 'issue');
//                                 }]);
// 		}

// 		$tag->articles = $tag->articles->sortByDesc(function($article, $key){
// 			return [$article->issue->year, $article->issue->no, $article->issue->tom];
// 		});


// 		if ($articleStatus && $articleStatus !== '*') {
// 			$tag->articles = $tag->articles->filter(function($article) use ($articleStatus){
// 	            if ($article->status->name == $articleStatus) {
// 	                return $article;
// 	            }
// 	        });
// 		}
		
// 		return $tag;
// 	}
}
