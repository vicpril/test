<?php

namespace Idea\Models;

use Illuminate\Database\Eloquent\Model;

class MetaUser extends Model
{
    //
    protected $table = 'meta_users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['lang' , 'full_name', 'first_name', 'last_name', 'patronymic', 'initials', 'post', 'description'];

    public $timestamps = false;

    public function user() {
    	return $this->belongsTo('Idea\Models\User');
    }

  
    /*
    *   Name getters
    */
    
    public function getFullNameAttribute () {
        $fullName = $this->last_name .' '. $this->first_name;
        $fullName .= ($this->patronymic) ? ' ' . $this->patronymic : '';
        return $fullName;
//         dump($this->last_name 
//                .' '. $this->first_name 
//                . ($this->patronymic) ? ' ' . $this->patronymic : '');
    }
  
    public function getShortNameAttribute() {
        $shortName = $this->last_name;
        if ($this->initials) {
            $shortName .=  ' '. $this->initials;
        } elseif ($this->first_name) {
            $shortName .=  ' '. substr($this->first_name, 0, 1) . '.';
            if ($this->patronymic) {
                $shortName .=  ' '. substr($this->patronymic, 0, 1) . '.';
            }
        }
        return $shortName;
    }
}
