<?php

namespace Idea\Models;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    protected $fillable = [
        'title_ru',
        'city_ru', 
        'address_ru',
        'title_en',
        'city_en', 
        'address_en',
    ];  
  
    public $timestamps = false;  
  
    public function users() {
        return $this->belongsToMany('Idea\Models\User', 'user_user');
    }
}
