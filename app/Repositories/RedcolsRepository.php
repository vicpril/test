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
    *   Update redcols
    *
    */
    public function update($data) {
        foreach($data as $item) {
            $this->model->updateOrCreate(['id' => $item['id']], $item);
        }
				
        return [
            'status' => 'success',
            'message' => 'Меню обновлено',
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
