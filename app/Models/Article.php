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
    protected $fillable = [
      'alias',
      'udk',
      'doi',
      'status_id',
      'issue_id',
      'date_arrival',
      'date_review',
      'applications',
      'finance',
      'file_audio'
    ];

    protected $dates = [
        'date_arrival',
        'date_review',
    ];

    // protected $relations = [
    //                             'status',
    //                             'users',
    //                             'tags',
    //                             'categories',
    //                             ];

    public function status()
    {
        return $this->belongsTo('App\Models\Status');
    }

    public function issue()
    {
        return $this->belongsTo('App\Models\Issue');
    }

    public function tags()
    {
        return $this->belongsToMany('App\Models\Tag', 'article_tag');
    }

    public function categories()
    {
        return $this->belongsToMany('App\Models\Category', 'article_category');
    }

    public function users()
    {
        return $this->belongsToMany('App\Models\User', 'article_user');
    }

    public function meta()
    {
        return $this->hasMany('App\Models\MetaArticle', 'article_id');
    }

//     public function title() {
    //         return $this->meta->where('lang', app()->getLocale())->first()->title;
    //     }

    /*
     *   Locale getters
     */

    public function getLocAttribute()
    {
        return $this->meta->where('lang', app()->getLocale())->first();
    }

    public function getRuAttribute()
    {
        return $this->meta->where('lang', 'ru')->first();
    }

    public function getEnAttribute()
    {
        return $this->meta->where('lang', 'en')->first();
    }

    /*
     *   Get links
     */
    public function getEditLinkAttribute()
    {
        return route('articles.edit', $this->id);
    }

    public function getLinkAttribute()
    {
        return route('article', $this->alias);
    }

}
