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

    public function getShortNameAttribute() {
        if ($this->last_name) {
            $shortName = $this->last_name;
            $shortName .= ($this->initials) ? ' '. $this->initials : ''; 
        }elseif ($this->full_name) {
            $shortName = $this->full_name; 
        }else {
            $shortName = $this->alias;
        }
        return $shortName;
    }

}
