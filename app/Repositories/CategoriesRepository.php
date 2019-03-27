<?php 

namespace Idea\Repositories;

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
//     public function getUsersList(\Illuminate\Http\Request $request) {
//         $paginate = ($request->input('paginate')) ? $request->input('paginate') : '';
//         $search = ($request->input('search')) ? $request->input('search') : '';
//         $sortBy = ($request->input('sortBy')) ? $request->input('sortBy') : '';
//         $orderBy = ($request->input('orderBy')) ? $request->input('orderBy') : '';

//         $users_id = $this->getSortedIdArray($search, $sortBy, $orderBy);

//         $users = User::whereIn('id', $users_id)
//                     ->with(['meta', 'articles'])
//                     ->orderByRaw("FIELD(id, ".implode(",",$users_id).")")
//                     ->paginate($paginate);

//         return $users;

//     }



}