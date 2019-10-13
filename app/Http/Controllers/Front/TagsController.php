<?php

namespace App\Http\Controllers\Front;

use App\Models\Tag;
use App\Repositories\ArticlesRepository;
use App\Repositories\TagsRepository;
use Illuminate\Http\Request;

class TagsController extends SiteController
{
    public function __construct(ArticlesRepository $a_rep)
    {
        parent::__construct(
            new \App\Repositories\MenusRepository(new \App\Models\Menu),
            new \App\Repositories\TagsRepository(new \App\Models\Tag)
        );

        $this->a_rep = $a_rep;

        $this->show_stol_menu = (config('app.locale') == 'ru') ? true : false;

    }

    public function show(Tag $tag, Request $request)
    {

        $this->setStatus();

        $this->prepareStolMenu();

        $this->template = 'front.tags';

        $this->title = __('Тема: :tag', ['tag' => $tag->loc]);

        $request->request->add([
            'paginate' => '10',
            'status' => $this->status,
            'relation' => ['tags.alias' => $tag->alias],
            'sortBy' => 'issue',
            'orderBy' => 'desc',
        ]);
        $articles = $this->a_rep->getArticlesList($request);

        $this->vars = array_add($this->vars, 'articles', $articles);

        return $this->renderOutput();
    }

}
