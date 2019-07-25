<?php 

namespace App\Models\WP;

// use Corcel\Model\Post as cPost;
use Corcel\Model\User as cUser;
use App\Models\WP\User as wpPost;


class User extends cUser
{
    protected $connection = 'wordpress';

}