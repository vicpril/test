<?php

namespace App\Http\Controllers\Back;

use App\Http\Controllers\Back\AdminController;
// use App\Http\Requests\IssueRequest;
use App\Models\Issue;
// use App\Models\Article;
// use App\Repositories\ArticlesRepository;
use App\Repositories\IssuesRepository;
use Illuminate\Http\Request;

class IssuesController extends AdminController
{
    public function __construct(IssuesRepository $i_rep)
    {
        parent::__construct();

        $this->subtitle = "Выпуски";

        $this->template = env('THEME_BACK') . '.back.issues.index';

        $this->repository = $i_rep;

        $this->table = 'issues';
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $this->subtitle = "Выпуски";

        $lastIssueId = Issue::orderBy('id', 'desc')->first()->id;

        return redirect()->route('issues.edit', $lastIssueId);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
//     public function create()
    //     {
    //         $this->subtitle = "Новая статья";

//         $this->template = env('THEME_BACK') . '.back.articles.edit';

//         return $this->renderOutput();
    //     }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
//     public function store(ArticleRequest $request)
    //     {
    //         $result = $this->repository->create($request->except('_token', '_method'));

//         if (is_array($result) && !empty($result['error'])) {
    //             return back()->with($result);
    //         }

//         return redirect(route('articles.index'))->with(['message' => $result]);

//     }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Issue $issue)
    {
        $this->subtitle = "Редактировать выпуск";

        $this->template = env('THEME_BACK') . '.back.issues.index';

        return $this->renderOutput(['id' => $issue->id]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function update(IssueRequest $request, $issue)
    //     {
    //         $result = $this->repository->update($issue, $request->except('_token', '_method'));

    //     if (is_array($result) && !empty($result['error'])) {
    //             return back()->with($result);
    //         }

    //     return redirect(route('issue.index'))->with(['message' => $result]);
    //     }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
//     public function destroy(Article $article)
    //     {
    //         $result = $this->repository->deleteArticle($article);

//         if (request()->ajax()) {

//             if (is_array($result) && ($result['status'] === 'success')) {
    //                 $result = array_add($result, 'redirect', route('articles.index'));
    //             }

//             return response()->json($result);

//         } else {

//             if (is_array($result) && !empty($result['error'])) {
    //                 return back()->with($result);
    //             }

//             return redirect(route('articles.index'))->with(['message' => $result]);
    //         }

//     }
}
