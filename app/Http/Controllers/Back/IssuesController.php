<?php

namespace App\Http\Controllers\Back;

use App\Http\Controllers\Back\AdminController;
use App\Http\Requests\IssueRequest;
use App\Models\Issue;
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
      
        return redirect()->route('issues.edit', $lastIssueId)->with(['message' => request()->session()->get('message')]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(IssueRequest $request)
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
    public function edit(Issue $issue)
    {
        $this->subtitle = "Редактировать выпуск";

        $this->template = env('THEME_BACK') . '.back.issues.index';

        return $this->renderOutput(['id' => $issue->id]);
    }

    /**
     * Update the specified resource in storage.
     *
     *          By API
     *
     */


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Issue $issue)
        {
            $result = $this->repository->deleteIssue($issue);

            if (is_array($result) && !empty($result['error'])) {
                    return back()->with($result);
                }

            return redirect(route('issues.index'))->with(['message' => $result]);
    }
}
