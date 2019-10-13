<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    protected $table = 'status';

    public function articles()
    {
        return $this->hasMany('App\Models\Article');
    }

    public function pages()
    {
        return $this->hasMany('App\Models\Page');
    }

    public function getTypeAttribute()
    {
        return ($this->title_en === 'public') ? true : false;
    }
}
