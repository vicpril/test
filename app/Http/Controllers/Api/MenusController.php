<?php

namespace App\Http\Controllers\Api;

use App\Models\Menu;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\MenuRequest;
use App\Http\Resources\MenuResource;
use App\Repositories\MenusRepository;

class MenusController extends Controller
{
    protected $repository;
  
    public function __construct (MenusRepository $m_rep) {
      
      $this->repository = $m_rep;
    }
  
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() 
    {
        $menus = $this->repository->getAllMenus();
        return MenuResource::collection($menus);
    }
  
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(MenuRequest $request) {
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
    public function update(MenuRequest $request, Menu $cat) {
        $result = $this->repository->update($cat, $request->except('_token', '_method'));
        return response()->json($result);
    }
  
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Menu $cat) {
        $this->middleware('auth:api');
        $result = $this->repository->deleteMenu($cat);

        if (is_array($result)) {
            return response()->json($result);
        }
    }
}
