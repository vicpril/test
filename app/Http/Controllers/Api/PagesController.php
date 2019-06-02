<?php

namespace App\Http\Controllers\Api;

use App\Models\Page;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\PageResource;
use App\Repositories\PagesRepository;
use App\Http\Resources\PageListResource;

class PagesController extends Controller
{
    protected $repository;

    public function __construct(PagesRepository $p_rep)
    {
        $this->repository = $p_rep;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $pages = $this->repository->getPagesList($request);
        return PageListResource::collection($pages);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Page  $page
     * @return \Illuminate\Http\Response
     */
    public function show(Page $page)
    {
        $page->loadMissing(['meta', 'status']);
        return new PageResource($page);
    }

    // /**
    //  * Remove the specified resource from storage.
    //  *
    //  * @param  \App\Models\Article  $article
    //  * @return \Illuminate\Http\Response
    //  */
    // public function destroy(Article $article)
    // {
    //     $result = $this->repository->deleteArticle($article);

    //     if (is_array($result)) {
    //         return response()->json($result);
    //     }
    // }

    // public function statusChange(Request $request, Article $article)
    // {
    //     $status = \App\Models\Status::where('title_en', $request->get('status'))->first();
    //     if ($status) {
    //         $message = ($status->title_en === 'public') ? 'Статья опубликована' : 'Статья снята с публикации';

    //         try {
    //             $article->status()->associate($status->id);
    //             $article->save();
    //         } catch (Extension $e) {
    //             $result = [
    //                 'status' => 'error',
    //                 'message' => 'Что-то пошло не так',
    //             ];
    //         }
    //         $result = [
    //             'status' => 'success',
    //             'message' => $message,
    //         ];

    //     } else {
    //         $result = [
    //             'status' => 'error',
    //             'message' => 'Новый статус не задан',
    //         ];
    //     }

    //     if (is_array($result)) {
    //         return response()->json($result);
    //     }
    // }
}
