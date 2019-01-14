<?php

namespace Idea\Models;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    protected $fillable = [
        'title_ru',
        'city_ru', 
        'adress_ru',
        'title_en',
        'city_en', 
        'adress_en',
    ];  
  
    public $timestamps = false;  
  
    public function users() {
        return $this->belongsToMany('Idea\Models\User', 'user_user');
    }
}
