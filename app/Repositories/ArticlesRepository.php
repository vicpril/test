<?php

namespace App\Repositories;

use App\Models\Article;
use App\Models\Issue;
use DB;
use Transliterate;

class ArticlesRepository extends Repository
{

    public function __construct(Article $article)
    {
        $this->model = $article;

    }

    public function one($alias, $lang = 'ru')
    {

        $result = parent::one($alias);

        if ($result) {
            $result->load(['status',
                'users' => function ($query) {$query->with('meta');},
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
                'users' => function ($query) {$query->with('meta');},
                'categories',
                'tags',
                'issue',
                'meta'])
            ->orderBy($parameters['order'], $parameters['direction'])
            ->paginate($nbrPages);
    }

    public function getArticles($onlyPublished, $stol = false, $order = 'date_review' ) {
        $result = $this->model->with('meta', 'status');

        if ($stol) {
            $result = $result->where('stol', true);
        }

        $result = $result->get();
        
        if ($onlyPublished) {
            $result = $result->filter(function($articles) {
                return $articles->status->type == true;
            });
        }
        
        $result = $result->sortBy($order);

        return $result;
    }
  
    
    /*
     *
     *    Get articles with conditions
     *        search in:
     *                title
     *                issue: year, tom, no, part
     *                                status: title_ru,
     *                                users: short_name
     *    For resources
     */
    public function getArticlesList(\Illuminate\Http\Request $request)
    {
        $paginate = ($request->input('paginate')) ? $request->input('paginate') : '';
        $search = ($request->input('search')) ? $request->input('search') : '';
        $sortBy = ($request->input('sortBy')) ? $request->input('sortBy') : 'id';
        $orderBy = ($request->input('orderBy')) ? $request->input('orderBy') : 'asc';
        $relations = ($request->input('relation')) ? $request->input('relation') : [];
        $status = ($request->input('status')) ? $request->input('status') : false;

        $articles_id = $this->getSortedIdArray($search, $sortBy, $orderBy, $status, $relations);

        $articles = Article::whereIn('id', $articles_id)
            ->with([
                'meta',
                'status',
                'issue',
                'tags',
                'categories',
                'users' => function ($query) {
                    $query->with('meta');
                },
            ])
            ->orderByRaw("FIELD(id, " . implode(',', $articles_id) . ")")
            ->paginate($paginate);

        return $articles;

    }

    private function getSortedIdArray($search = '', $sortBy = 'title', $orderBy = 'asc', $status = false, Array $relations = [])
    {
        switch ($sortBy) {
            case 'title':$sortBy = ['meta_articles.title'];
                break;
            case 'issue':$sortBy = ['issues.year', 'issues.no', 'issues.part'];
                break;
            case 'status':$sortBy = ['status.title_ru'];
                break;
            case 'updated_at':$sortBy = ['articles.updated_at'];
                break;
            default:$sortBy = ['meta_articles.title'];
                break;
        }

        $query = DB::table('articles')
            ->leftjoin('meta_articles', 'articles.id', '=', 'meta_articles.article_id')
            ->leftjoin('status', 'articles.status_id', '=', 'status.id')
            ->leftjoin('issues', 'articles.issue_id', '=', 'issues.id')
            ->leftjoin('article_user', 'articles.id', '=', 'article_user.article_id')
            ->leftjoin('users', 'users.id', '=', 'article_user.user_id')
            ->leftjoin('meta_users', 'users.id', '=', 'meta_users.user_id')
            ->leftjoin('article_category', 'articles.id', '=', 'article_category.article_id')
            ->leftjoin('categories', 'categories.id', '=', 'article_category.category_id')
            ->leftjoin('article_tag', 'articles.id', '=', 'article_tag.article_id')
            ->leftjoin('tags', 'tags.id', '=', 'article_tag.tag_id');
          if ($relations) {
              foreach ($relations as $relation => $value) {
                $query->where($relation, $value);
              }
           }

          if ($status) {
               $query->where("status.title_en", $status);
           }  
      
/*        search in:
 *                title
 *                issue: year, tom, no, part
 *                                status: title_ru,
 *                                users: short_name,
 *                                categories: title_ru,
 *                                tags: title_ru,
 */
          if ($search) {
            $query->where(function ($query) use ($search) {
                $query->where('meta_articles.title', 'like', "%" . $search . "%")
                    ->orWhere('status.title_ru', 'like', "%" . $search . "%")
                    ->orWhere('issues.year', 'like', "%" . $search . "%")
                    ->orWhere('issues.tom', 'like', "%" . $search . "%")
                    ->orWhere('issues.no', 'like', "%" . $search . "%")
                    ->orWhere('issues.part', 'like', "%" . $search . "%")
                    ->orWhere('meta_users.short_name', 'like', "%" . $search . "%")
                    ->orWhere('categories.title_ru', 'like', "%" . $search . "%")
                    ->orWhere('tags.title_ru', 'like', "%" . $search . "%");
            });
          }

        foreach ($sortBy as $sort) {
            $query = $query->orderBy($sort, $orderBy);
        }

        return $query->groupBy('articles.id')
            ->pluck('articles.id')->unique()->toArray();
    }

    /*
     *
     *   Add new article to database
     *
     */
    public function create($data)
    {
        $alias = Transliterate::make($data['title_ru'], ['type' => 'url', 'lowercase' => true]);
        $alias = $this->getUnique($alias, 'articles', 'alias');
        $article = $this->model->make([
            'alias' => $alias,
            'doi' => $data['doi'],
            'udk' => $data['udk'],
            'stol' => filter_var($data['stol'], FILTER_VALIDATE_BOOLEAN),
            'date_arrival' => $data['date_arrival'],
            'date_review' => $data['date_review'],
            'applications' => $data['applications'],
            'finance' => $data['finance'],
            'file_audio' => $data['file_audio'],
        ]);

        $article->save();

        $article->meta()->create([
            'lang' => 'ru',
            'title' => $data['title_ru'],
            'text' => $data['text_ru'],
            'annotation' => $data['annotation_ru'],
            'keywords' => $data['keywords_ru'],
            'file' => $data['file_ru'],
            'bibliography' => $data['bibliography_ru'],
        ]);

        $article->meta()->create([
            'lang' => 'en',
            'title' => $data['title_en'],
            'text' => $data['text_en'],
            'annotation' => $data['annotation_en'],
            'keywords' => $data['keywords_en'],
            'file' => $data['file_en'],
            'bibliography' => $data['bibliography_en'],
        ]);

        if (filter_var($data['status'], FILTER_VALIDATE_BOOLEAN)) {
            $article->status()->associate(1);
        } else {
            $article->status()->associate(2);
        }

        $article->users()->detach();
        foreach ($data['users'] as $user_id) {
            $article->users()->attach($user_id);
        }

        $article->tags()->sync($data['tags']);
        $article->categories()->sync($data['categories']);

        $issue = Issue::firstOrCreate([
            'year' => $data['year'],
            'no' => $data['no'],
            'part' => $data['part'],
        ], [
            'year' => $data['year'],
            'tom' => $data['tom'],
            'no' => $data['no'],
            'full_no' => $data['full_no'],
            'part' => $data['part'],
        ]);
        $article->position = $issue->articles()->count() + 1;
        $issue->articles()->save($article);

        return [
            'status' => 'success',
            'message' => 'Новая статья добавлена',
            'issueId' => $issue->id,
        ];
    }

    /*
     *
     *   Update the article in database
     *
     */
    public function update(Article $article, $data)
    {
//       dd($data);
        $article->update([
            'doi' => $data['doi'],
            'udk' => $data['udk'],
            'stol' => filter_var($data['stol'], FILTER_VALIDATE_BOOLEAN),
            'date_arrival' => $data['date_arrival'],
            'date_review' => $data['date_review'],
            'applications' => $data['applications'],
            'finance' => $data['finance'],
            'file_audio' => $data['file_audio'],
        ]);

        $article->ru->update([
            'title' => $data['title_ru'],
            'text' => $data['text_ru'],
            'annotation' => $data['annotation_ru'],
            'keywords' => $data['keywords_ru'],
            'file' => $data['file_ru'],
            'bibliography' => $data['bibliography_ru'],
        ]);

        $article->en->update([
            'title' => $data['title_en'],
            'text' => $data['text_en'],
            'annotation' => $data['annotation_en'],
            'keywords' => $data['keywords_en'],
            'file' => $data['file_en'],
            'bibliography' => $data['bibliography_en'],
        ]);

        if (filter_var($data['status'], FILTER_VALIDATE_BOOLEAN)) {
            $article->status()->associate(1);
        } else {
            $article->status()->associate(2);
        }

        if (!arraysStrickEquil($article->users_id(), $data['users'])) {
            $article->users()->detach();
            foreach ($data['users'] as $user_id) {
                $article->users()->attach($user_id);
            }
        }

        $article->tags()->sync($data['tags']);
        $article->categories()->sync($data['categories']);

        $issue = Issue::firstOrCreate([
            'year' => $data['year'],
            'no' => $data['no'],
            'part' => $data['part'],
        ], [
            'year' => $data['year'],
            'tom' => $data['tom'],
            'no' => $data['no'],
            'full_no' => $data['full_no'],
            'part' => $data['part'],
        ])->articles()->save($article);

        $article->touch();

        return [
            'status' => 'success',
            'message' => 'Статья обновлена',
        ];
    }


    /*
     *
     *   Delete the article & meta from database 
     *
     */
    public function deleteArticle(Article $article)
    {
        $article->meta->each(function ($meta) {
            $meta->delete();
        });
        $article->users()->detach();
        $article->categories()->detach();
        $article->tags()->detach();

        if ($article->delete()) {
            return ['status' => 'success',
                'message' => 'Статья удалена'];
        } else {
            return ['status' => 'error',
                'message' => 'Что-то пошло не так'];
        }
    }

}
