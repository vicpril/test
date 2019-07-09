<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;

use App\Models\Article;
use App\Models\Page;

class IndexController extends SiteController
{
    //
	public function __construct() {
		parent::__construct(new \App\Repositories\MenusRepository(new \App\Models\Menu));

		$this->template = 'front.index';
	}

    public function index() {
		$homepage = Page::with('meta')->where('template', 'mainpage')->first();

		$this->show_top_menu = $homepage->show_top_menu;
		$this->show_sidebar_menu = $homepage->show_sidebar_menu;
		$this->show_review_menu = $homepage->show_review_menu;
			
      	$this->vars = array_add($this->vars, 'title', $homepage->loc->title);
			
		$content = $homepage->loc->content;
      	$this->vars = array_add($this->vars, 'content', $content);

    	return $this->renderOutput();

    }


}
