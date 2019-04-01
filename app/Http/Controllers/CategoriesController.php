<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Repositories\CategoriesRepository;

class CategoriesController extends SiteController
{
    //
    public function __construct(CategoriesRepository $c_rep) {
		parent::__construct(new \App\Repositories\MenusRepository(new \App\Models\Menu));

		$this->c_rep = $c_rep;

		$this->template = env('THEME').'.single';
	}

	public function show ($alias) {

		$category = $this->getCategory($alias, '*');

		$content = view(env('THEME').'.category_content')->with('category', $category)
                                                        ->render();
        $this->vars = array_add($this->vars, 'content', $content);

        $sidebar_menu = '';

        $sidebar = view(env('THEME').'.sidebar')->with('sidebar_menu', $sidebar_menu)->render();
        $this->vars = array_add($this->vars, 'sidebar', $sidebar);

		return $this->renderOutput();
	}

	public function getCategory($alias, $articleStatus = '*') {
		$category = $this->c_rep->one($alias);

		if ($category) {
			$category->load(['articles' => function($query){
                                    $query->with('status', 'users', 'issue');
                                }]);
		}

		$category->articles = $category->articles->sortByDesc(function($article, $key){
			return [$article->issue->year, $article->issue->no, $article->issue->tom];
		});


		if ($articleStatus && $articleStatus !== '*') {
			$category->articles = $category->articles->filter(function($article) use ($articleStatus){
	            if ($article->status->name == $articleStatus) {
	                return $article;
	            }
	        });
		}
		
		return $category;
	}



    /***********************************
    *              FOR TEST
    ***********************************/
	public function renderCategory($category = FALSE) {
        if ($category) {
            foreach ($category->articles as $article) {
                echo $category->name . ' - ' ;
                echo $article->id . ' - ' ;
                echo '<b>'.$article->title . '</b> - ' 
                    . $article->status->name . ' - ' ;

                foreach ($article->users as $user) {
                    echo '<i>'.$user->name  . '</i> - ';
                }

                echo '<br />';
            }
        }
    }
}
