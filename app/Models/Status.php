<?php

namespace Idea\Models;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    //

    protected $table = 'status';

    public function articles() {
    	return $this->hasMany('Idea\Models\Article');
    }
}
