<?php

namespace Idea\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
  protected $fillable = [
		'name_ru', 'name_en', 'alias', 'parent_id'
	]; 
	
	//
	protected $casts = [
// 		'name' => 'array',
	];
	
		/**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [];


    public function articles() {
    	return $this->belongsToMany('Idea\Models\Article', 'article_category');
    }


    // public function name() {
    // 	return $this->name[app()->getLocale()];
    // }


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
