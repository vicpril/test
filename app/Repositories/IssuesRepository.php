<?php

namespace App\Repositories;

use App\Models\Article;
use App\Models\Issue;

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
        $result = ($status) ? $this->model->withStatus($status) : $this->model;

        $result = $result->orderBy('year', 'desc');
        $result = $result->orderBy('no', 'desc');
        $result = $result->orderBy('part', 'asc');

        return $result->first();
    }

    /*
     *  Get ALL Issue with current status
     *   without relations
     */
    public function allByStatus($status = false)
    {
        $result = ($status) ? $this->model->withStatus($status) : $this->model;
        $result = $result->orderBy('year', 'desc');
        $result = $result->orderBy('no', 'desc');
        $result = $result->orderBy('part', 'asc');

        return $result->get();
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

        switch ($load) {
            case false:
                break;
            case 'status':
                $result = $result->with([
                    'articles',
                    'articles.status',
                ]);
                break;
            default:
                $result = $result->with([
                    'articles',
                    'articles.meta',
                    'articles.tags',
                    'articles.status',
                    'articles.categories',
                    'articles.users',
                    'articles.users.meta']);
                break;
        }

        return $result->first();
    }

    /*
     *   Get Issue By Request 'year', 'no', 'part'
     */
    public function getIssueByRequest($request = array(), $load = true, $orderBy = array('year', 'no', 'part'))
    {
        $result = $this->model;

        if (!empty($request)) {
            foreach ($request as $key => $value) {
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
                'articles.users.meta',
            ]);
        }

        return $result->first();
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

    public function getNextIssue($issue, $status = false)
    {
        if ($issue) {
            $nextIssue = $this->one(['full_no' => $issue->full_no + 1, 'part' => 1], 'ru', 'status');

            if (($nextIssue && $status)) {
                $nextIssue->filterArticlesByStatus($status);
                if (count($nextIssue->articles) == 0) {
                    return $this->getNextIssue($nextIssue, $status);
                }
            }
            return $nextIssue;
        }
        return null;
    }

    public function getPrevIssue($issue, $status = false)
    {
        if ($issue) {
            $prevIssue = $this->one(['full_no' => $issue->full_no - 1, 'part' => 1], 'ru', 'status');

            if (($prevIssue && $status)) {
                $prevIssue->filterArticlesByStatus($status);
                if (count($prevIssue->articles) == 0) {
                    return $this->getNextIssue($prevIssue, $status);
                }
            }
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

        if (isset($data["articlesOrder"])) {
            $order = array_flip($data["articlesOrder"]);
            Article::find($data["articlesOrder"])
                ->each(function ($article) use ($order) {
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
