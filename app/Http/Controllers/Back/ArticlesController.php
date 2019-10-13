<?php

namespace App\Http\Controllers\Back;

use App\Http\Controllers\Back\AdminController;
use App\Http\Requests\ArticleRequest;
use App\Models\Article;
use App\Repositories\ArticlesRepository;
use Illuminate\Http\Request;

class ArticlesController extends AdminController
{
    public function __construct(ArticlesRepository $a_rep)
    {
        parent::__construct();

        $this->subtitle = "Статьи";

        $this->template = 'back.articles.index';

        $this->repository = $a_rep;

        $this->table = 'articles';
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $this->subtitle = "Статьи";

        $this->template = 'back.articles.index';

        return $this->renderOutput();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->subtitle = "Новая статья";

        $this->template = 'back.articles.edit';

        return $this->renderOutput();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ArticleRequest $request)
    {
        $result = $this->repository->create($request->except('_token', '_method'));

        if (is_array($result) && !empty($result['error'])) {
            return back()->with($result);
        }

        return redirect(route('issues.edit', $result["issueId"]))->with(['message' => $result]);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article)
    {
        $this->subtitle = "Редактировать статью";

        $this->template = 'back.articles.edit';

        return $this->renderOutput(['id' => $article->id]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ArticleRequest $request, $article)
    {
        $result = $this->repository->update($article, $request->except('_token', '_method'));

        if (is_array($result) && !empty($result['error'])) {
            return back()->with($result);
        }

        return redirect(route('issues.edit', $article->issue->id))->with(['message' => $result]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        $result = $this->repository->deleteArticle($article);

        if (request()->ajax()) {

            if (is_array($result) && ($result['status'] === 'success')) {
                $result = array_add($result, 'redirect', route('articles.index'));
            }

            return response()->json($result);

        } else {

            if (is_array($result) && !empty($result['error'])) {
                return back()->with($result);
            }

            return redirect(route('issues.edit', $article->issue->id))->with(['message' => $result]);

        }

    }
}
