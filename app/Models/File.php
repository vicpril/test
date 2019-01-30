<?php

namespace Idea\Models;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    protected $fillable = [
        'title',
        'url', 
    ];  
  
    public $timestamps = true;
  
    public function article() {
        return $this->hasMany('Idea\Models\MetaArticle', 'file', 'id');
    }
}
