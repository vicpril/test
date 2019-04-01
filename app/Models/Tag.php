<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    //
    protected $casts = [
		'name' => 'array',
	];
	
    public function articles() {
    	return $this->belongsToMany('App\Models\Article', 'article_tag');
    }

    public function getLocAttribute() {
//         return $this->name[app()->getLocale()];
				switch (app()->getLocale()) {
					case 'ru': return $this->name_ru;
					case 'en': return $this->name_en;
				}
    }

    public function getRuAttribute() {
        return $this->name_ru;
    }

    public function getEnAttribute() {
        return $this->name_en;
    }
}
