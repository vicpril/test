<?php

namespace App\Http\Controllers\Front;

use App\Models\Page;
use Illuminate\Http\Request;

class PagesController extends SiteController
{
    protected $page;

	public function __construct(Page $page) {
        parent::__construct(
            new \App\Repositories\MenusRepository(new \App\Models\Menu),
            new \App\Repositories\TagsRepository(new \App\Models\Tag),
        );

		$this->template = 'front.index';
    }
    
    
    public function index (Page $page) {
        // dd($page);
        switch ($page->template) {
            case 'common':
                if($page->loc->on){
                    // return $this->show($page);
                    $this->setMenu($page);
                    $this->title = $page->loc->title;
                    $this->content = $page->loc->content;
                    return $this->renderOutput();
                } else {
                    return redirect(url("/"));
                }
                break;
            case 'mainpage':
                return redirect(url("/"));
                break;
            case 'articles':
            case 'article':
            case 'categories':
            case 'tags':
            case 'authors':
                return redirect(url("/$page->template"));
                break;
            
            default:
                // return redirect(url("/$page->template"));
                    $this->setMenu($page);
                    $this->title = $page->loc->title;
                    $this->content = view("front.templates.{$page->template}_content")->render();
                    return $this->renderOutput();
                break;
        }
    }

 

    private function show(Page $page) {

        $this->show_top_menu = $page->show_top_menu;
		$this->show_sidebar_menu = $page->show_sidebar_menu;
		$this->show_review_menu = $page->show_review_menu;

        // $content = $this->page->loc->content;
    	// $content = view('front.index_content')->render();
        // $this->vars = array_add($this->vars, 'content', $content);
        $this->vars = array_add($this->vars, 'title', $page->loc->title);
        $this->vars = array_add($this->vars, 'content', $page->loc->content);

        // $sidebar_menu = '';\

        // $sidebar = view('front.sidebar')->with('sidebar_menu', $sidebar_menu)->render();
        // $this->vars = array_add($this->vars, 'sidebar', $sidebar);

    	return $this->renderOutput();

    }

}
