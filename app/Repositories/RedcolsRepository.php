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
        $db_records = $this->all()->pluck('id')->toArray();
        $new_records = array_column($data, 'id');
        $compare = array_diff($db_records, $new_records);
      
        $this->model->destroy($compare);
      
        foreach($data as $item) {
						if ($item['user_id']) {
            	$this->model->updateOrCreate(['id' => $item['id']], $item);
						}
        }
				
        return [
            'status' => 'success',
            'message' => 'Меню обновлено',
        ];
    }

}
