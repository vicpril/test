<?php

namespace Idea\Http\Controllers\Back;

use Illuminate\Http\Request;
use Idea\Http\Requests\JobRequest;
use Idea\Http\Controllers\Controller;
use Idea\Models\Job;
use Idea\Repositories\JobsRepository;

class JobsController extends Controller 
{
     use Indexable;
  
     public function __construct(JobsRepository $j_rep) {
        
        $this->repository = $j_rep;
       
        $this->table = 'jobs';
     }
  
     /**
     * Display a listing of the resource.
     *
     * use Indexable.php
     */

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(JobRequest $request)
    {
        $result = $this->repository->create($request);
        
        if ($request->ajax()) {
            return response()->json($result);
        }
            
        if ( is_array($result) && !empty($result['error']) ) {
            return back()->with($result);
        }

        return redirect('/admin/jobs')->with($result);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $record = $this->repository->find($id);
        
        if (request()->ajax()) {
          return response()->json([
            'data' => $record
          ]);
        }
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
        $result = $this->repository->update($request, $id);
        
        if ($request->ajax()) {
            return response()->json($result);
        }
            
        if ( is_array($result) && !empty($result['error']) ) {
            return back()->with($result);
        }

        return redirect('/admin/jobs')->with($result);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = $this->repository->delete($id);
        
        if (request()->ajax()) {
            return response()->json($result);
        }
            
        if ( is_array($result) && !empty($result['error']) ) {
            return back()->with($result);
        }

        return redirect('/admin/jobs')->with($result);
    }
}
