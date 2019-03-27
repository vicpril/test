<?php

namespace Idea\Http\Controllers\Api;

use DB;
use Idea\Models\Category;
use Idea\Http\Resources\CategoryResource;
use Idea\Repositories\CategoriesRepository;
use Illuminate\Http\Request;
use Idea\Http\Controllers\Controller;

class CategoriesController extends Controller
{
    protected $repository;
  
    public function __construct (CategoriesRepository $c_rep) {
      $this->repository = $c_rep;
    }
  
    public function index () {
        $cats = $this->repository->getCategoriesList($request);

        return CategoryResource::collection($cats);
    }
  
    public function save (Request $request, Category $cat) {
      
    }
  
    public function delete (Category $cat) {
      
    }
}
