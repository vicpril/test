<?php

namespace App\Http\Controllers\Front;

use App\Models\Page;
use Illuminate\Http\Request;

class PagesController extends SiteController
{
	public function __construct() {
        parent::__construct(new \App\Repositories\MenusRepository(new \App\Models\Menu));
        
		$this->template = 'front.single';
    }
    

    public function index (Page $page) {
        switch ($page->template) {
            case 'common':
                return $this->show($page);
                break;
            case 'mainpage':
                return redirect(url("/"));
                break;
            
            default:
                return redirect(url("/$page->template"));
                break;
        }
    }

    private function show(Page $page) {

        // $content = $this->page->loc->content;
    	// $content = view('front.index_content')->render();
        // $this->vars = array_add($this->vars, 'content', $content);
        $this->vars = array_add($this->vars, 'title', $page->loc->title);
        $this->vars = array_add($this->vars, 'content', $page->loc->content);

        $sidebar_menu = '';

        $sidebar = view('front.sidebar')->with('sidebar_menu', $sidebar_menu)->render();
        $this->vars = array_add($this->vars, 'sidebar', $sidebar);

    	return $this->renderOutput();

    }

}
