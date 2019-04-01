<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Issue extends Model
{
    //

	// protected $relations = [
	// 						'articles'
	// 						];
    
    public function articles () {
    	return $this->hasMany('App\Models\Article');
    }

    
}
