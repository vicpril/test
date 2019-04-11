<?php 

namespace App\Repositories;

use DB;
use App\Models\Article;

class ArticlesRepository extends Repository{


	public function __construct(Article $article) {
		$this->model = $article;

	}

	public function one($alias, $lang = 'ru') {
		
		$result = parent::one($alias);
		
		if ($result) {
			$result->load(['status', 
							'users' => function($query) {$query->with('meta');}, 
							'categories', 
							'tags', 
							'issue', 
							'meta']);
                $prop = $result->meta->where('lang', $lang)->first()->getAttributes();
                $result->setRawAttributes(array_merge($result->getAttributes(), $prop));
		}

		return $result;
	}

	public function getAll($nbrPages, $parameters) 
	{
		return $this->model
				->with(['status', 
							'users' => function($query) {$query->with('meta');}, 
							'categories', 
							'tags', 
							'issue', 
							'meta'])
				->orderBy($parameters['order'], $parameters['direction'])
				->paginate ($nbrPages);
	}

	
	
	/*
	 *
	 *    Get articles with conditions
	 *        search in:
	 *                title
	 *                issue: year, tom, no, part
	 *								status: title_ru,
	 *								users: short_name
	 *    For resources
	 */
	public function getArticlesList(\Illuminate\Http\Request $request) {
			$paginate = ($request->input('paginate')) ? $request->input('paginate') : '';
			$search = ($request->input('search')) ? $request->input('search') : '';
			$sortBy = ($request->input('sortBy')) ? $request->input('sortBy') : 'id';
			$orderBy = ($request->input('orderBy')) ? $request->input('orderBy') : 'asc';

			$articles_id = $this->getSortedIdArray($search, $sortBy, $orderBy);

			$articles = Article::whereIn('id', $articles_id)
									->with([
										'meta', 
										'status', 
										'issue',
										'tags',
										'categories',
										'users' => function($query) {
											$query->with('meta');
										}
									])
                    ->orderByRaw("FIELD(id, ".implode(',',$articles_id).")")
									->paginate($paginate);

			return $articles;

	}
	
	private function getSortedIdArray ($search = '', $sortBy = 'title', $orderBy = 'asc') {
        switch ($sortBy) {
						case 'title': $sortBy = ['meta_articles.title']; break;
						case 'issue': $sortBy = ['issues.year','issues.no','issues.part']; break;
						case 'status': $sortBy = ['status.title_ru']; break;
						case 'updated_at': $sortBy = ['articles.updated_at']; break;
					default: $sortBy = ['meta_articles.title']; break;
				}
            
						$users_id = DB::table('articles')
								->leftjoin('meta_articles', 'articles.id', '=', 'meta_articles.article_id')
								->leftjoin('status', 'articles.status_id', '=', 'status.id')
								->leftjoin('issues', 'articles.issue_id', '=', 'issues.id')
								->leftjoin('article_user', 'articles.id', '=', 'article_user.article_id')
								->leftjoin('users', 'users.id', '=', 'article_user.user_id')
								->leftjoin('meta_users', 'users.id', '=', 'meta_users.user_id')
								->leftjoin('article_category', 'articles.id', '=', 'article_category.article_id')
								->leftjoin('categories', 'categories.id', '=', 'article_category.category_id')
								->leftjoin('article_tag', 'articles.id', '=', 'article_tag.article_id')
								->leftjoin('tags', 'tags.id', '=', 'article_tag.tag_id')
/*        search in:
*                title
*                issue: year, tom, no, part
*								status: title_ru,
*								users: short_name,
*								categories: title_ru,
*								tags: title_ru,
*/
								->where(function($query) use ($search) {
										$query->where('meta_articles.title', 'like', "%".$search."%")
													->orWhere('status.title_ru', 'like', "%".$search."%")
													->orWhere('issues.year', 'like', "%".$search."%")
													->orWhere('issues.tom', 'like', "%".$search."%")
													->orWhere('issues.no', 'like', "%".$search."%")
													->orWhere('issues.part', 'like', "%".$search."%")
													->orWhere('meta_users.short_name', 'like', "%".$search."%")
													->orWhere('categories.title_ru', 'like', "%".$search."%")
													->orWhere('tags.title_ru', 'like', "%".$search."%");
								});

							foreach ($sortBy as $sort) {
								$users_id = $users_id->orderBy($sort, $orderBy);
							}
								
								$users_id = $users_id->groupBy('articles.id')
												 ->pluck('articles.id')->unique()->toArray();
               
        return $users_id;
    }
	
	
	
	

	public function deleteArticle(Article $article)
	{
				$article->meta->each(function ($meta) {
            $meta->delete();
        });
        $article->users()->detach();
        $article->categories()->detach();
        $article->tags()->detach();
		
			if($article->delete()) {
        return ['status' => 'success',
                'message' => 'Статья удалена'];	
      } else {
        return ['status' => 'error',
                'message' => 'Что-то пошло не так'];	
      }
	}

}