<?php

namespace Idea\Http\Controllers\Back;

use Illuminate\Http\Request;
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
    public function store(Request $request)
    {
        dump($request);
        $request = json_decode($request);
        
        $validRequest = $request->validate([
            'title_ru' => 'required|max:100',
            'city_ru' => 'max:20',
            'address_ru' => 'max:250',
            'title_en' => 'max:100',
            'city_en' => 'max:20',
            'address_en' => 'max:250'
        ]);

        $params = $request->except('_token');

        if ($this->repository->create($params)) {
            return response()->json(['success', 'Организация успешно добавлена']);
        } else {
            return response()->json(['error', 'Что-то пошло не так']);
        }

        
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
        //
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
