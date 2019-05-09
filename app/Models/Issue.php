<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Issue extends Model
{
    protected $fillable = [
        'year',
        'tom',
        'no',
        'part',
        'full_no',
        'file_title_ru',
        'file_title_en',
    ];

    protected $appends = [
        'editLink',
    ];

    public $timestamps = false;

    public function articles()
    {
        return $this->hasMany('App\Models\Article')->orderBy('position');
    }

    /*
     *   Get links
     */
    public function getEditLinkAttribute()
    {
        return route('issues.edit', $this->id);
    }

}
