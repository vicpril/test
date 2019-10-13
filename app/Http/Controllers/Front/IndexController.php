<?php

namespace App\Http\Controllers\Front;

use App\Models\Page;

class IndexController extends SiteController
{

    protected $page;

    public function __construct()
    {
        parent::__construct(
            new \App\Repositories\MenusRepository(new \App\Models\Menu),
            new \App\Repositories\TagsRepository(new \App\Models\Tag)
        );

        $this->page = Page::with('meta')->where('template', 'mainpage')->first();

        $this->setMenu($this->page);

        $this->template = 'front.index';
    }

    public function index()
    {

        $this->vars = array_add($this->vars, 'title', $this->page->loc->title);

        $content = $this->page->loc->content;
        $this->vars = array_add($this->vars, 'content', $content);

        return $this->renderOutput();

    }

}
