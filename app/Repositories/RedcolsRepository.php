<?php

namespace App\Repositories;

use DB;
use Transliterate;
use App\Models\Redcol;

class RedcolsRepository extends Repository
{

    public function __construct(Redcol $redcol)
    {
        $this->model = $redcol;

    }

    /*
     *
     *   Update the page in database
     *
     */
    public function update(Redcol $redcol, $data)
    {
        $redcol->update([
            'alias' => $data['alias'],
            'template' => $data['template'],
            'show_top_menu' => (isset($data['show_top_menu'])) ? true : false,
            'show_sidebar_menu' => (isset($data['show_sidebar_menu'])) ? true : false,
            'show_review_menu' => (isset($data['show_review_menu'])) ? true : false,

        ]);

        $redcol->ru->update([
            'lang' => 'ru',
            'on' => (isset($data['on_ru']) && $data['on_ru'] == "true") ? 1 : 0,
            'title' => $data['title_ru'] ?? '',
            'content' => $data['content_ru'] ?? '',
        ]);

        $redcol->en->update([
            'lang' => 'en',
            'on' => (isset($data['on_en']) && $data['on_en'] == "true") ? 1 : 0,
            'title' => $data['title_en'] ?? '',
            'content' => $data['content_en'] ?? '',
        ]);

        if (filter_var($data['status'], FILTER_VALIDATE_BOOLEAN)) {
            $redcol->status()->associate(1);
        } else {
            $redcol->status()->associate(2);
        }

        $redcol->touch();

        return [
            'status' => 'success',
            'message' => 'Страница обновлена',
        ];
    }

    /*
     *
     *   Delete the page & meta from database 
     *
     */

    public function deleteRedcol(Redcol $redcol)
    {
        $redcol->meta->each(function ($meta) {
            $meta->delete();
        });

        if ($redcol->delete()) {
            return ['status' => 'success',
                'message' => 'Страница удалена'];
        } else {
            return ['status' => 'error',
                'message' => 'Что-то пошло не так'];
        }
    }

}
