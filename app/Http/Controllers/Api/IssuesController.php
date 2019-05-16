<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\IssueRequest;
use App\Http\Resources\IssueResource;
use App\Models\Issue;
use App\Repositories\IssuesRepository;
use Illuminate\Http\Request;

class IssuesController extends Controller
{
    protected $repository;

    public function __construct(IssuesRepository $i_rep)
    {

        $this->repository = $i_rep;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->repository->getIssues();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Issue $issue)
    {
        $issue->loadMissing(['articles' => function ($q) {
            $q->with(['meta', 'users', 'status']);
        }]);
        return new IssueResource($issue);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(IssueRequest $request, Issue $issue)
    {
        $result = $this->repository->update($issue, $request->except('_token', '_method'));
        return response()->json($result);
    }

    /**
     * Check the issue exists in database
     *
     */
    public function checkIssueExists(IssueRequest $request){
        $result = $this->repository->checkExists($request->except('_token', '_method'));
        return response()->json($result);
    }
}
