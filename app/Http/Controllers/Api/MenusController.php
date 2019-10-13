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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Menu $menu) {
        $result = $this->repository->update($menu, $request->except('_token', '_method'));
        return response()->json($result);
    }
  
}
