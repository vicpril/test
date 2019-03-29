<?php

namespace Idea\Http\Controllers\Api;

use DB;
use Route;
use Idea\Models\Category;
use Idea\Http\Resources\CategoryResource;
use Idea\Repositories\CategoriesRepository;
use Illuminate\Http\Request;
use Idea\Http\Requests\CategoryRequest;
use Idea\Http\Controllers\Controller;

class CategoriesController extends Controller
{
    protected $repository;
  
    public function __construct (CategoriesRepository $c_rep) {
      
      $this->repository = $c_rep;
    }
  
    public function index(Request $request) 
    {
        $cats = $this->repository->getCategoriesList($request);
        return $cats;
//         return CategoryResource::collection($cats);
    }
  
    public function store(CategoryRequest $request) {
        $result = $this->repository->create($request->except('_token', '_method'));

         return response()->json($result);
    }
  
    public function update(CategoryRequest $request, Category $cat) {
      dd($request);
    }
  
    public function destroy(Category $cat) {
        $this->middleware('auth:api');
        $result = $this->repository->deleteCategory($cat);

        if (is_array($result)) {
            return response()->json($result);
        }
    }
}
