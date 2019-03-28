<?php 

namespace Idea\Repositories;

use DB;
use Idea\Models\Category;


class CategoriesRepository extends Repository{

	

	public function __construct(Category $category) {
		$this->model = $category;

	}
	
	/*
     *
     *    Get categories with conditions
     *        search in:
     *                 name_ru, name_en
		 *				order by:
		 * 								name_ru, name_en
     *    For resources
     */
    public function getCategoriesList(\Illuminate\Http\Request $request) {
        $paginate = ($request->input('paginate')) ? $request->input('paginate') : '';
        $search = ($request->input('search')) ? $request->input('search') : '';
        $sortBy = ($request->input('sortBy')) ? $request->input('sortBy') : '';
        $orderBy = ($request->input('orderBy')) ? $request->input('orderBy') : '';

//         $cats = $this->getSortedIdArray($search, $sortBy, $orderBy);
			$cats = DB::table('categories as c')
								->leftjoin('article_category as a', 'c.id', '=', 'a.category_id')
								->selectRaw("c.*, count(a.category_id) as articles")
								->groupBy('c.id')
								->where('c.name_ru', 'like', "%".$search."%")
								->orWhere('c.name_en', 'like', "%".$search."%")
								->orderBy($sortBy, $orderBy)
								->paginate($paginate);

        return $cats;

    }



}