<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
   	protected $fillable = [
			'title_ru', 'title_en', 'alias'
		]; 
		
		// thouch culumn `used_at`
		public function touchUsed()
    {
        $this->used_at = $this->freshTimestamp();
        return ($this->save()) ? $this : false;
    }
	
    public function articles() {
    	return $this->belongsToMany('App\Models\Article', 'article_tag');
    }
	

    public function getLocAttribute() {
				switch (app()->getLocale()) {
					case 'ru': return $this->title_ru; break;
					case 'en': return $this->title_en; break;
				}
    }

    public function getRuAttribute() {
        return $this->title_ru;
    }

    public function getEnAttribute() {
        return $this->title_en;
    }
	
	/*
    *   Filters
    */
    public function filterArticlesByStatus($status) {
		$this->loadMissing(['articles', 'articles.status']);
        $this->articles = $this->articles->filter(function ($article) use ($status) {
            return $article->status->title_en == $status;
        })->values();
        return $this;
    }

    public function published ()
    {
        return $this->filterArticlesByStatus('public');
    }

    public function unpublished ()
    {
        return $this->filterArticlesByStatus('private');
    }
}
