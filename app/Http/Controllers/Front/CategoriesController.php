<?php

namespace App\Http\Controllers\Front;

use App\Models\Category;
use App\Repositories\ArticlesRepository;
use Illuminate\Http\Request;

class CategoriesController extends SiteController
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

    public function show(Category $cat, Request $request)
    {

        $this->setStatus();

        $this->prepareStolMenu();

        $this->template = 'front.categories';

        $this->title = __('Материалы под рубрикой: :cat', ['cat' => $cat->loc]);

        $request->request->add([
            'paginate' => '10',
            'status' => $this->status,
            'relation' => ['categories.alias' => $cat->alias],
            'sortBy' => 'issue',
            'orderBy' => 'desc',
        ]);
        $articles = $this->a_rep->getArticlesList($request);

        $this->vars = array_add($this->vars, 'articles', $articles);

        return $this->renderOutput();
    }

}
