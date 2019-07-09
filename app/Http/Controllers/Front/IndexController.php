<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;

use App\Models\Article;
use App\Models\Page;

class IndexController extends SiteController
{
    //
	protected $page;
	
	public function __construct() 
	{
		parent::__construct(new \App\Repositories\MenusRepository(new \App\Models\Menu));
		
		$this->page = Page::with('meta')->where('template', 'mainpage')->first();
		
		$this->show_top_menu = $this->page->show_top_menu;
		$this->show_sidebar_menu = $this->page->show_sidebar_menu;
		$this->show_review_menu = $this->page->show_review_menu;

		$this->template = 'front.index';
	}

  public function index() 
	{
// 		dd($this);
		$this->vars = array_add($this->vars, 'title', $this->page->loc->title);
			
		$content = $this->page->loc->content;
    $this->vars = array_add($this->vars, 'content', $content);

    return $this->renderOutput();

  }


}
