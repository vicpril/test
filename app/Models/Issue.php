<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Issue extends Model
{
  	protected $fillable = [
			'year',
			'tom',
			'no',
			'part',
			'full_no',
    ];
	
		public $timestamps = false;
    
    public function articles () {
    	return $this->hasMany('App\Models\Article');
    }

    
}
