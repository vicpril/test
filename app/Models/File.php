<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    protected $fillable = [
        'title',
        'url', 
    ];  
  
    public $timestamps = true;
  
    public function article() {
        return $this->hasMany('App\Models\MetaArticle', 'file', 'id');
    }
  
    public function user() {
        return $this->hasMany('App\Models\User', 'avatar', 'id');
    }
}
