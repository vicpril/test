<?php

namespace App\Http\Controllers\Api;

use App\Models\Issue;
use Illuminate\Http\Request;
use App\Http\Requests\IssueRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\IssueResource;
use App\Repositories\IssuesRepository;

class IssuesController extends Controller
{
    protected $repository;
  
    public function __construct (IssuesRepository $i_rep) {
      
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Issue $issue)
    {
        $issue->loadMissing(['articles' => function($q) {
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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
