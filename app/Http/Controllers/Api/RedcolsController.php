<?php

namespace App\Http\Controllers\Api;

use App\Models\Redcol;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\RedcolsRepository;
use App\Http\Resources\RedcolListResource;

class RedcolsController extends Controller
{
    protected $repository;

    public function __construct(RedcolsRepository $rc_rep)
    {
        $this->repository = $rc_rep;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $redcols = $this->repository->all()->sortBy('position');
        return RedcolListResource::collection($redcols);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Redcol $redcol) {
        $result = $this->repository->update($request->except('_token', '_method'));
        return response()->json($result);
    }
}
