<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{

    protected $table = 'articles';

    // protected $appends = ['article_id', 'lang', 'title', 'text', 'annotation', 'keywords'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    // protected $fillable = ['title', 'alias', 'doi', 'text', 'description', 'status_id', 'issue_id'];
    protected $fillable = ['alias', 'doi', 'status_id', 'issue_id'];


    // protected $relations = [
    //                             'status',
    //                             'users',
    //                             'tags',
    //                             'categories',
    //                             ];
    

    public function status() {
    	return $this->belongsTo('App\Models\Status');
    }

    public function issue() {
        return $this->belongsTo('App\Models\Issue');
    }

    public function tags() {
    	return $this->belongsToMany('App\Models\Tag', 'article_tag');
    }

    public function categories() {
    	return $this->belongsToMany('App\Models\Category', 'article_category');
    }

    public function users() {
    	return $this->belongsToMany('App\Models\User', 'article_user');
    }

    public function meta()  {
        return $this->hasMany('App\Models\MetaArticle', 'article_id');
    }



    public function title() {
        return $this->meta->where('lang', app()->getLocale())->first()->title;
    }

}
