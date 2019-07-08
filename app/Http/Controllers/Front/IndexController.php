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
			
      $this->vars = array_add($this->vars, 'title', $homepage->loc->title);
			
			$content = $homepage->loc->content;
      $this->vars = array_add($this->vars, 'content', $content);

    	return $this->renderOutput();

    }


}
