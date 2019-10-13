<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MetaMenu extends Model
{
    protected $table = 'meta_menus';

    protected $fillable = [
        'title', 'type', 'path', 'parent', 'menu_id', 'order',
    ];

    protected $appends = ['url'];

    public $timestamps = false;

    public function menu()
    {
        return $this->belongsTo('App\Models\Menu');
    }

    public function getUrlAttribute()
    {
        switch ($this->type) {
            case 'page':
                return route('page', $this->path);
                break;

            default:
                return $this->path;
                break;
        }
    }

}
