<?php 

namespace App\Repositories;

use DB;
use Transliterate;
use App\Models\Category;


class CategoriesRepository extends Repository{

	

		public function __construct(Category $category) {
			$this->model = $category;

		}
	
		/*
     *
     *    Get categories with conditions
     *        search in:
     *                 title_ru, title_en
		 *				order by:
		 * 								title_ru, title_en
     *    For resources
     */
    public function getCategoriesList(\Illuminate\Http\Request $request) {
        $paginate = ($request->input('paginate')) ? $request->input('paginate') : '';
        $search = ($request->input('search')) ? $request->input('search') : '';
        $sortBy = ($request->input('sortBy')) ? $request->input('sortBy') : 'id';
        $orderBy = ($request->input('orderBy')) ? $request->input('orderBy') : 'asc';

				$cats = DB::table('categories as c')
								->leftjoin('article_category as a', 'c.id', '=', 'a.category_id')
								->selectRaw("c.*, count(a.category_id) as articles")
								->groupBy('c.id')
								->where('c.title_ru', 'like', "%".$search."%")
								->orWhere('c.title_en', 'like', "%".$search."%")
								->orderBy($sortBy, $orderBy)
								->get();
        return $cats;
    }
	
		/*
    *
    *   Add new category to database
    *
    */
    public function create($data)
    {
        $alias = Transliterate::make($data['title_ru'], ['type' => 'url', 'lowercase' => true]);
				$alias = $this->getUnique($alias, 'categories', 'alias');
				$data = array_add($data, 'alias', $alias);
        
				$cat = $this->model->create($data);

        return [
          'status' => 'success',
          'message' => 'Новая рубрика добавлена'
        ];
    }
	
		/*
    *
    *   Update category in database
    *
    */
    public function update(Category $cat, $data)
    {
        if ($cat->update($data)) {
					return [
						'status' => 'success',
						'message' => 'Рубрика обновлена'
					];
				} else {
					return [
						'status' => 'error',
						'message' => 'Что-то пошло не так'
					];
				}
    }
	
		/*
    *
    *   Remove category from database
    *           relations (articles) will be dissociate
    */
    public function deleteCategory($cat) {

			try {
      	$cat->articles()->detach();
				$cat->delete();
				return [
					'status' => 'success', 
					'message' => 'Рубрика удалена'
				];
			} catch (Exception $e) {
				return ['error' => 'Что-то пошло не так. '. $e->getMessage()];	
			}
    }



}