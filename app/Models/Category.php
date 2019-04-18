<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
		
		protected $fillable = [
			'title_ru', 'title_en', 'alias', 'parent_id'
		]; 
	
		/**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [];
	
		// thouch culumn `used_at`
		public function touchUsed()
    {
        $this->used_at = $this->freshTimestamp();
        return ($this->save()) ? $this : false;
    }


    public function articles() {
    	return $this->belongsToMany('App\Models\Article', 'article_category');
    }

	
    public function getLocAttribute() {
				switch (app()->getLocale()) {
					case 'ru': return $this->title_ru;
					case 'en': return $this->title_en;
				}
    }

    public function getRuAttribute() {
        return $this->title_ru;
    }

    public function getEnAttribute() {
        return $this->title_en;
    }
}
