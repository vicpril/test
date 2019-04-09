<?php

namespace App\Http\Controllers\Api;

use App\Models\Tag;
use Illuminate\Http\Request;
use App\Http\Requests\TagRequest;
use App\Http\Resources\TagResource;
use App\Repositories\TagsRepository;
use App\Http\Controllers\Controller;

class TagsController extends Controller
{
    protected $repository;
  
    public function __construct (TagsRepository $t_rep) {
      
      $this->repository = $t_rep;
    }
  
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) 
    {
        $tags = $this->repository->getTagsList($request);
        return $tags;
    }
  
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TagRequest $request) {
        $result = $this->repository->create($request->except('_token', '_method'));
        return response()->json($result);
    }
  
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(TagRequest $request, Tag $tag) {
        $result = $this->repository->update($tag, $request->except('_token', '_method'));
        return response()->json($result);
    }
  
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tag $tag) {
        $this->middleware('auth:api');
        $result = $this->repository->deleteTag($tag);

        if (is_array($result)) {
            return response()->json($result);
        }
    }
}
