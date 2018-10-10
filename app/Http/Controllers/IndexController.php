<?php

namespace Idea\Http\Controllers;

use Illuminate\Http\Request;

use Idea\Models\Article;

class IndexController extends SiteController
{
    //
	public function __construct() {
		parent::__construct(new \Idea\Repositories\MenusRepository(new \Idea\Models\Menu));

		$this->template = env('THEME').'.index';
	}



    public function index() {

    	$content = view(env('THEME').'.index_content')->render();
        $this->vars = array_add($this->vars, 'content', $content);

    	return $this->renderOutput();

    }


}
