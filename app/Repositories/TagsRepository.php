<?php 

namespace App\Repositories;

use DB;
use Transliterate;
use App\Models\Tag;


class TagsRepository extends Repository{

	

		public function __construct(Tag $tag) {
			$this->model = $tag;

		}
	
		/*
     *
     *    Get tags with conditions
     *        search in:
     *                 title_ru, title_en
		 *				order by:
		 * 								title_ru, title_en
     *    For resources
     */
    public function getTagsList(\Illuminate\Http\Request $request) {
        $paginate = ($request->input('paginate')) ? $request->input('paginate') : '';
        $search = ($request->input('search')) ? $request->input('search') : '';
        $sortBy = ($request->input('sortBy')) ? $request->input('sortBy') : 'id';
        $orderBy = ($request->input('orderBy')) ? $request->input('orderBy') : 'asc';

				$tags = DB::table('tags as t')
								->leftjoin('article_tag as a', 't.id', '=', 'a.tag_id')
								->selectRaw("t.*, count(a.tag_id) as articles")
								->groupBy('t.id')
								->where('t.title_ru', 'like', "%".$search."%")
								->orWhere('t.title_en', 'like', "%".$search."%")
								->orderBy($sortBy, $orderBy)
								->get();
        return $tags;
    }
	
		/*
     *
     *    Get TAG with conditions
		 *						and filter by article->status
		 *
     */
//     public function getTagsList(\Illuminate\Http\Request $request) {
//         $paginate = ($request->input('paginate')) ? $request->input('paginate') : '';
//         $search = ($request->input('search')) ? $request->input('search') : '';
//         $sortBy = ($request->input('sortBy')) ? $request->input('sortBy') : 'id';
//         $orderBy = ($request->input('orderBy')) ? $request->input('orderBy') : 'asc';

// 				$tags = DB::table('tags as t')
// 								->leftjoin('article_tag as a', 't.id', '=', 'a.tag_id')
// 								->selectRaw("t.*, count(a.tag_id) as articles")
// 								->groupBy('t.id')
// 								->where('t.title_ru', 'like', "%".$search."%")
// 								->orWhere('t.title_en', 'like', "%".$search."%")
// 								->orderBy($sortBy, $orderBy)
// 								->get();
//         return $tags;
//     }
	
		/*
    *
    *   Add new tag to database
    *
    */
    public function create($data)
    {
        $alias = Transliterate::make($data['title_ru'], ['type' => 'url', 'lowercase' => true]);
				$alias = $this->getUnique($alias, 'tags', 'alias');
				$data = array_add($data, 'alias', $alias);
        
				$tag = $this->model->create($data)->touchUsed();

        return [
          'status' => 'success',
          'message' => 'Новая метка добавлена',
					'object' => $tag
        ];
    }
	
		/*
    *
    *   Update tag in database
    *
    */
    public function update(Tag $tag, $data)
    {
        if ($tag->update($data)) {
					return [
						'status' => 'success',
						'message' => 'Метка обновлена'
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
    public function deleteTag($tag) {

			try {
      	$tag->articles()->detach();
				$tag->delete();
				return [
					'status' => 'success', 
					'message' => 'Метка удалена'
				];
			} catch (Exception $e) {
				return ['error' => 'Что-то пошло не так. '. $e->getMessage()];	
			}
    }



}