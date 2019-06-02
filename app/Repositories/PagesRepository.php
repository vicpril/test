<?php

namespace App\Repositories;

use DB;
use Transliterate;
use App\Models\Page;

class PagesRepository extends Repository
{

    public function __construct(Page $page)
    {
        $this->model = $page;

    }

//     public function one($alias, $lang = 'ru')
//     {

//         $result = parent::one($alias);

//         if ($result) {
//             $result->load(['status',
//                 'users' => function ($query) {$query->with('meta');},
//                 'categories',
//                 'tags',
//                 'issue',
//                 'meta']);
//             $prop = $result->meta->where('lang', $lang)->first()->getAttributes();
//             $result->setRawAttributes(array_merge($result->getAttributes(), $prop));
//         }

//         return $result;
//     }

//     public function getAll($nbrPages, $parameters)
//     {
//         return $this->model
//             ->with(['status',
//                 'users' => function ($query) {$query->with('meta');},
//                 'categories',
//                 'tags',
//                 'issue',
//                 'meta'])
//             ->orderBy($parameters['order'], $parameters['direction'])
//             ->paginate($nbrPages);
//     }

    /*
     *
     *    Get pages with conditions
     *        search in:
     *                title
     *                issue: year, tom, no, part
     *                                status: title_ru,
     *                                users: short_name
     *    For resources
     */
    public function getPagesList(\Illuminate\Http\Request $request)
    {
        $paginate = ($request->input('paginate')) ? $request->input('paginate') : '';
        $search = ($request->input('search')) ? $request->input('search') : '';
        $sortBy = ($request->input('sortBy')) ? $request->input('sortBy') : 'id';
        $orderBy = ($request->input('orderBy')) ? $request->input('orderBy') : 'asc';

        $pages_id = $this->getSortedIdArray($search, $sortBy, $orderBy);

        $pages = page::whereIn('id', $pages_id)
            ->with([
                'meta',
                'status',
            ])
            ->orderByRaw("FIELD(id, " . implode(',', $pages_id) . ")")
            ->paginate($paginate);

        return $pages;

    }

    private function getSortedIdArray($search = '', $sortBy = 'title', $orderBy = 'asc')
    {
        switch ($sortBy) {
            case 'title':$sortBy = ['meta_pages.title'];
                break;
            case 'status':$sortBy = ['status.title_ru'];
                break;
            case 'updated_at':$sortBy = ['pages.updated_at'];
                break;
            default:$sortBy = ['meta_pages.title'];
                break;
        }

        $pages_id = DB::table('pages')
            ->leftjoin('meta_pages', 'pages.id', '=', 'meta_pages.page_id')
            ->leftjoin('status', 'pages.status_id', '=', 'status.id')
/*        search in:
 *                title
 */
            ->where(function ($query) use ($search) {
                $query->where('meta_pages.title', 'like', "%" . $search . "%")
                    ->orWhere('status.title_ru', 'like', "%" . $search . "%");
            });

        foreach ($sortBy as $sort) {
            $pages_id = $pages_id->orderBy($sort, $orderBy);
        }

        $pages_id = $pages_id->groupBy('pages.id')
            ->pluck('pages.id')->unique()->toArray();

        return $pages_id;
    }

//     /*
//      *
//      *   Add new article to database
//      *
//      */
//     public function create($data)
//     {
//         $alias = Transliterate::make($data['title_ru'], ['type' => 'url', 'lowercase' => true]);
//         $alias = $this->getUnique($alias, 'articles', 'alias');
//         $article = $this->model->make([
//             'alias' => $alias,
//             'doi' => $data['doi'],
//             'udk' => $data['udk'],
//             'stol' => filter_var($data['stol'], FILTER_VALIDATE_BOOLEAN),
//             'date_arrival' => $data['date_arrival'],
//             'date_review' => $data['date_review'],
//             'applications' => $data['applications'],
//             'finance' => $data['finance'],
//             'file_audio' => $data['file_audio'],
//         ]);

//         $article->save();

//         $article->meta()->create([
//             'lang' => 'ru',
//             'title' => $data['title_ru'],
//             'text' => $data['text_ru'],
//             'annotation' => $data['annotation_ru'],
//             'keywords' => $data['keywords_ru'],
//             'file' => $data['file_ru'],
//             'bibliography' => $data['bibliography_ru'],
//         ]);

//         $article->meta()->create([
//             'lang' => 'en',
//             'title' => $data['title_en'],
//             'text' => $data['text_en'],
//             'annotation' => $data['annotation_en'],
//             'keywords' => $data['keywords_en'],
//             'file' => $data['file_en'],
//             'bibliography' => $data['bibliography_en'],
//         ]);

//         if (filter_var($data['status'], FILTER_VALIDATE_BOOLEAN)) {
//             $article->status()->associate(1);
//         } else {
//             $article->status()->associate(2);
//         }

//         $article->users()->detach();
//         foreach ($data['users'] as $user_id) {
//             $article->users()->attach($user_id);
//         }

//         $article->tags()->sync($data['tags']);
//         $article->categories()->sync($data['categories']);

//         $issue = Issue::firstOrCreate([
//             'year' => $data['year'],
//             'no' => $data['no'],
//             'part' => $data['part'],
//         ], [
//             'year' => $data['year'],
//             'tom' => $data['tom'],
//             'no' => $data['no'],
//             'full_no' => $data['full_no'],
//             'part' => $data['part'],
//         ]);
//         $article->position = $issue->articles()->count() + 1;
//         $issue->articles()->save($article);

//         return [
//             'status' => 'success',
//             'message' => 'Новая статья добавлена',
//             'issueId' => $issue->id,
//         ];
//     }

//     /*
//      *
//      *   Update the article in database
//      *
//      */
//     public function update(Article $article, $data)
//     {
// //       dd($data);
//         $article->update([
//             'doi' => $data['doi'],
//             'udk' => $data['udk'],
//             'stol' => filter_var($data['stol'], FILTER_VALIDATE_BOOLEAN),
//             'date_arrival' => $data['date_arrival'],
//             'date_review' => $data['date_review'],
//             'applications' => $data['applications'],
//             'finance' => $data['finance'],
//             'file_audio' => $data['file_audio'],
//         ]);

//         $article->ru->update([
//             'title' => $data['title_ru'],
//             'text' => $data['text_ru'],
//             'annotation' => $data['annotation_ru'],
//             'keywords' => $data['keywords_ru'],
//             'file' => $data['file_ru'],
//             'bibliography' => $data['bibliography_ru'],
//         ]);

//         $article->en->update([
//             'title' => $data['title_en'],
//             'text' => $data['text_en'],
//             'annotation' => $data['annotation_en'],
//             'keywords' => $data['keywords_en'],
//             'file' => $data['file_en'],
//             'bibliography' => $data['bibliography_en'],
//         ]);

//         if (filter_var($data['status'], FILTER_VALIDATE_BOOLEAN)) {
//             $article->status()->associate(1);
//         } else {
//             $article->status()->associate(2);
//         }

//         if (!arraysStrickEquil($article->users_id(), $data['users'])) {
//             $article->users()->detach();
//             foreach ($data['users'] as $user_id) {
//                 $article->users()->attach($user_id);
//             }
//         }

//         $article->tags()->sync($data['tags']);
//         $article->categories()->sync($data['categories']);

//         $issue = Issue::firstOrCreate([
//             'year' => $data['year'],
//             'no' => $data['no'],
//             'part' => $data['part'],
//         ], [
//             'year' => $data['year'],
//             'tom' => $data['tom'],
//             'no' => $data['no'],
//             'full_no' => $data['full_no'],
//             'part' => $data['part'],
//         ])->articles()->save($article);

//         $article->touch();

//         return [
//             'status' => 'success',
//             'message' => 'Статья обновлена',
//         ];
//     }

//     public function deleteArticle(Article $article)
//     {
//         $article->meta->each(function ($meta) {
//             $meta->delete();
//         });
//         $article->users()->detach();
//         $article->categories()->detach();
//         $article->tags()->detach();

//         if ($article->delete()) {
//             return ['status' => 'success',
//                 'message' => 'Статья удалена'];
//         } else {
//             return ['status' => 'error',
//                 'message' => 'Что-то пошло не так'];
//         }
//     }

}
