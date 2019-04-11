<?php

namespace App\Http\Controllers\Api;

use App\Models\Article;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\ArticleListResource;
use App\Repositories\ArticlesRepository;

class ArticlesController extends Controller
{
    protected $repository;
  
    public function __construct (ArticlesRepository $a_rep) {
      $this->repository = $a_rep;
    }
  
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $articles = $this->repository->getArticlesList($request);
        return ArticleListResource::collection($articles);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // use web controller
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        $article->loadMissing(['meta', 'status', 'users']);
        return new ArticleResource($article);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        $result = $this->repository->deleteArticle($article);

        if (is_array($result)) {
            return response()->json($result);
        }
    }
    
    
    public function statusChange(Request $request, Article $article) {
//       dd($article);
        $status = \App\Models\Status::where('title_en', $request->get('status'))->first();
        if ($status) {
            $message = ($status->title_en === 'public') ? 'Статья опубликована' : 'Статья снята с публикации';
            if ($article->status()->associate($status->id)) {
              $result = [
                'status' => 'success',
                'message' => $message
              ];
            } else {
              $result = [
                'status' => 'error',
                'message' => 'Что-то пошло не так'
              ];
            }
        } else {
          $result = [
                'status' => 'error',
                'message' => 'Новый статус не задан'
              ];
        }
      
        if (is_array($result)) {
            return response()->json($result);
        }
    }
}