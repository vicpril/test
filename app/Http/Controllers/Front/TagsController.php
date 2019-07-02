<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;

use App\Repositories\TagsRepository;

class TagsController extends SiteController
{
    //
    public function __construct(TagsRepository $t_rep) {
		parent::__construct(new \App\Repositories\MenusRepository(new \App\Models\Menu));

		$this->t_rep = $t_rep;

		$this->template = env('THEME').'.single';
	}

	public function show ($alias) {

		$tag = $this->getTag($alias, '*');

		$content = view(env('THEME').'.tag_content')->with('tag', $tag)
                                                        ->render();
        $this->vars = array_add($this->vars, 'content', $content);

        $sidebar_menu = '';

        $sidebar = view(env('THEME').'.sidebar')->with('sidebar_menu', $sidebar_menu)->render();
        $this->vars = array_add($this->vars, 'sidebar', $sidebar);

		return $this->renderOutput();
	}

	public function getTag($alias, $articleStatus = '*') {
		$tag = $this->t_rep->one($alias);

		if ($tag) {
			$tag->load(['articles' => function($query){
                                    $query->with('status', 'users', 'issue');
                                }]);
		}

		$tag->articles = $tag->articles->sortByDesc(function($article, $key){
			return [$article->issue->year, $article->issue->no, $article->issue->tom];
		});


		if ($articleStatus && $articleStatus !== '*') {
			$tag->articles = $tag->articles->filter(function($article) use ($articleStatus){
	            if ($article->status->name == $articleStatus) {
	                return $article;
	            }
	        });
		}
		
		return $tag;
	}
}
