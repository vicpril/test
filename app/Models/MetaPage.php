<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MetaPage extends Model
{
    //
    protected $table = 'meta_pages';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'lang',
        'on',
        'title',
        'content',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'on' => 'boolean',
    ];

    public $timestamps = false;

    public function page()
    {
        return $this->belongsTo('App\Models\Page');
    }

}
