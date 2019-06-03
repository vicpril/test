<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $table = 'pages';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
      'alias',
      'status_id',
      'template'
    ];

    public function status()
    {
        return $this->belongsTo('App\Models\Status');
    }


    public function meta()
    {
        return $this->hasMany('App\Models\MetaPage', 'page_id');
    }

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
        return route('pages.edit', $this->id);
    }

    public function getLinkAttribute()
    {
//         return route('page', $this->alias);
    }
}
