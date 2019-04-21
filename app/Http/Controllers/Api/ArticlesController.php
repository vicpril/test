<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ArticleListResource;
use App\Http\Resources\ArticleResource;
use App\Models\Article;
use App\Repositories\ArticlesRepository;
use Illuminate\Http\Request;

class ArticlesController extends Controller
{
    protected $repository;

    public function __construct(ArticlesRepository $a_rep)
    {
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
     * Display the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        $article->loadMissing(['meta', 'status', 'users', 'tags', 'categories', 'issue']);
        return new ArticleResource($article);
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

    public function statusChange(Request $request, Article $article)
    {
        $status = \App\Models\Status::where('title_en', $request->get('status'))->first();
        if ($status) {
            $message = ($status->title_en === 'public') ? 'Статья опубликована' : 'Статья снята с публикации';

            try {
                $article->status()->associate($status->id);
                $article->save();
            } catch (Extension $e) {
                $result = [
                    'status' => 'error',
                    'message' => 'Что-то пошло не так',
                ];
            }
            $result = [
                'status' => 'success',
                'message' => $message,
            ];

        } else {
            $result = [
                'status' => 'error',
                'message' => 'Новый статус не задан',
            ];
        }

        if (is_array($result)) {
            return response()->json($result);
        }
    }
}
