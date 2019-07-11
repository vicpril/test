<?php

namespace App\Repositories;

use App\Models\Issue;
use App\Models\Article;


class IssuesRepository extends Repository
{

    public function __construct(Issue $issue)
    {
        $this->model = $issue;
    }

    /*
     *  Get last Issue with current status
     *   without relations
     */
    public function oneLastByStatus($status = false)
    {
        $result = $this->model->select('*');

        $result = $result->orderBy('year', 'desc');
        $result = $result->orderBy('no', 'desc');
        $result = $result->orderBy('part', 'asc');

        $result = $result->with(['articles' => function ($query) {
            $query->with('status');
        }]);

        $result = $this->getIssuesByArticleStatus($status, $result->get());
      
        return $result->first();
    }

    /*
     *  Get last Issue with current status
     *   with relations
     */
    public function one($attr = array(), $lang = 'ru', $load = true, $orderBy = array('year', 'no', 'part'))
    {
        $result = $this->model;

        if (!empty($attr)) {
            foreach ($attr as $key => $value) {
                $result = $result->where($key, $value);
            }
        }

        if (!empty($orderBy)) {
            foreach ($orderBy as $value) {
                $result = $result->orderBy($value, 'desc');
            }
        }
        
      if ($load) {
        $result = $result->with([
          'articles', 
          'articles.meta', 
          'articles.tags', 
          'articles.status', 
          'articles.categories', 
          'articles.users', 
          'articles.users.meta']);
      }
//                                )->first();
// dd($result);

//         
//             if ($result) {
//                 $result->load('articles');
//                 $result->articles->load(['meta', 'status', 'categories', 'tags', 'issue', 'users' => function ($query) {
//                     $query->with('meta');
//                 }]);
//                 $result->articles->each(function ($a) use ($lang) {
//                     // Meta Article prepare
//                     $prop = $a->meta->where('lang', $lang)->first()->getAttributes();
//                     $a->setRawAttributes(array_merge($a->getAttributes(), $prop));

//                     // Meta Users prepare
//                     $a->users->each(function ($u) use ($lang) {
//                         $prop = $u->meta->where('lang', $lang)->first()->getAttributes();
//                         $u->setRawAttributes(array_merge($u->getAttributes(), $prop));
//                     });

//                 });
//             }
//         }

        return $result->first();
    }

    public function getIssuesByArticleStatus($status = false, $issues = false, $orderBy = array('year', 'no', 'part'))
    {

        if (!$issues) {
            $issues = $this->getIssues($orderBy);
        }

        if ($status && $status !== '*') {
            if (is_a($issues, '\Illuminate\Database\Eloquent\Model')) {
                $issues->articles = $issues->articles->filter(function ($article) use ($status) {
                    if ($article->status->type == $status) {
                        return $article;
                    }
                });

            } else {
                $issues->each(function ($issue) use ($status) {
                    $issue->articles = $issue->articles->filter(function ($article) use ($status) {
                        if ($article->status->type == $status) {
                            return $article;
                        }
                    });

                });

                $issues = $issues->reject(function ($issue) {
                    return $issue->articles->count() < 1;
                });
            }

        };

        return $issues;
    }

    public function getIssues($articles = false, $orderBy = array('year', 'no', 'part'))
    {
        $result = $this->model;

        if (!empty($orderBy)) {
            foreach ($orderBy as $value) {
                $result = $result->orderBy($value, 'desc');
            }
        }

        $result = $result->get();

        if ($articles) {
            $result = $result->loadMiss(['articles' => function ($query) {
                $query->with('status', 'users', 'categories', 'tags');
            }]);
        }
        return $result;
    }

    /*
     *    Сгруппировать статьи по рубрикам, не меняя порядка
     *
     *    $issue = [
     *                ['category1'=>'....', 'articles'=>collection(...)],
     *                ['category2'=>'....', 'articles'=>collection(...)],
     *                ['category3'=>'....', 'articles'=>collection(...)],
     *            ]
     *
     */
    public function prepareIssue($issue = false)
    {
        if ($issue) {

            $keyed = $issue->articles->mapToGroups(function ($article, $articleCat) {
                $categoriesSorted = collect($article->categories->sortBy('name')->values()->all());
                $atricleCat = view(env('THEME') . '.add.categories_link')->with('categories', $categoriesSorted)->render();
                // $atricleCat = $categoriesSorted->implode('name', ' -> ');
                return [$atricleCat => $article];
            });

            $keyed->all();

            // dd($keyed);

            $issue->mapedArticles = $keyed;

            return $issue;
        }
    }

    public function getNextIssue($issue)
    {
        if ($issue) {
            $nextIssue = $this->one(['full_no' => $issue->full_no + 1, 'part' => 1], 'ru', false);
            return $nextIssue;
        }
        return null;
    }

    public function getPrevIssue($issue)
    {
        if ($issue) {
            $prevIssue = $this->one(['full_no' => $issue->full_no - 1, 'part' => 1], 'ru', false);
            return $prevIssue;
        }
        return null;
    }
  
    /*
     *
     *   Check issue in database by year/no/part
     *
     */
    public function checkExists($data)
    {
        $targetIssue = Issue::where([
            'year' => $data['year'],
            'no' => $data['no'],
            'part' => $data['part'],
        ])->first();

        if (isset($targetIssue)) {
            return [
                'result' => true,
                'status' => 'error',
                'message' => 'Выпуск уже существует. Выберите другие Год/Номер/Часть.',
            ];
        } else {
            return [
                'result' => false,
                'status' => 'success',
            ];
        };
    }
        

    /*
     *
     *   Create the new issue in database
     *
     */
    public function create($data)
    {
        $newIssue = Issue::create($data);
      
        if (isset($newIssue)) {
            return [
                'status' => 'success',
                'message' => 'Новый выпуск создан',
                'issueId' => $newIssue->id,
            ];
        } else {
            return [
                'status' => 'error',
                'message' => 'Что-то пошло не так',
            ];
        }
    }
  
    /*
     *
     *   Update the issue in database
     *
     */
    public function update(Issue $issue, $data)
    {
        $targetIssue = Issue::where([
            'year' => $data['year'],
            'no' => $data['no'],
            'part' => $data['part'],
        ])->first();

        if (isset($targetIssue) && $targetIssue->id !== $issue->id) {
            return [
                'status' => 'error',
                'message' => 'Выбраный выпуск уже существует. Выберите другие Год/Номер/Часть.',
            ];
        };
        
        if(isset($data["articlesOrder"])) {
          $order = array_flip($data["articlesOrder"]);
          Article::find($data["articlesOrder"])
                 ->each(function($article) use($order) {
                 $article->position = $order[$article->id] + 1;
                 $article->save();
                 });
        }
      
        if ($issue->update($data)) {
            return [
                'status' => 'success',
                'message' => 'Изменения сохранены',
            ];
        } else {
            return [
                'status' => 'error',
                'message' => 'Что-то пошло не так',
            ];
        }
    }
  
    public function deleteIssue(Issue $issue)
    {

        if ($issue->delete()) {
            return ['status' => 'success',
                'message' => 'Выпуск удален'];
        } else {
            return ['status' => 'error',
                'message' => 'Что-то пошло не так'];
        }
    }

}
