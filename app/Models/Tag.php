<?php

namespace Idea\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    //
    protected $casts = [
		'name' => 'array',
	];
	
    public function articles() {
    	return $this->belongsToMany('Idea\Models\Article', 'article_tag');
    }

    public function name() {
    	return $this->name[app()->getLocale()];
    }

    public function getRuAttribute() {
        return $this->name['ru'];
    }

    public function getEnAttribute() {
        return $this->name['en'];
    }
}
