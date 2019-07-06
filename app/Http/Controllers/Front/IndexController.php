<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;

use App\Models\Article;

class IndexController extends SiteController
{
    //
	public function __construct() {
		parent::__construct(new \App\Repositories\MenusRepository(new \App\Models\Menu));

		$this->template = 'front.index';
	}

    public function index() {

    	// $content = view('front.index_content')->render();
        // $this->vars = array_add($this->vars, 'content', $content);

    	return $this->renderOutput();

    }


}
