<?php

namespace Idea\Models;

use Illuminate\Database\Eloquent\Model;

class MetaArticle extends Model
{
    //
    protected $table = 'meta_articles';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['article_id', 'lang', 'title', 'text', 'annotation', 'keywords', 'file'];

    public $timestamps = false;



    public function article() {
    	return $this->belongsTo('Idea\Models\Article');
    }
  
    public function file() {
      return $this->belongsTo('Idea\Models\File');
    }

}
