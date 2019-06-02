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

    public $timestamps = false;

    public function page() {
    	return $this->belongsTo('App\Models\Page');
    }
  
}
