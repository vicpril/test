<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MetaMenus extends Model
{
    protected $fillable = [
    	'title', 'type', 'path', 'parent', 'menu_id'
    ];

    public $timestamps = false;

    public function menu() {
        $this->belongsTo('App\Models\Menu');
    }

}
