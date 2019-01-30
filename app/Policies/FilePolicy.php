<?php

namespace Idea\Policies;

use Idea\Models\User;
use Idea\Models\File;
use Illuminate\Auth\Access\HandlesAuthorization;

class FilePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the file.
     *
     * @param  \Idea\Models\User  $user
     * @param  \Idea\File  $file
     * @return mixed
     */
    public function view(User $user, File $file)
    {
        //
    }

    /**
     * Determine whether the user can create files.
     *
     * @param  \Idea\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the file.
     *
     * @param  \Idea\Models\User  $user
     * @param  \Idea\File  $file
     * @return mixed
     */
    public function update(User $user, File $file)
    {
        //
    }

    /**
     * Determine whether the user can delete the file.
     *
     * @param  \Idea\Models\User  $user
     * @param  \Idea\File  $file
     * @return mixed
     */
    public function delete(User $user)
    {
        return $user->role === 'admin';
    }

    /**
     * Determine whether the user can restore the file.
     *
     * @param  \Idea\Models\User  $user
     * @param  \Idea\File  $file
     * @return mixed
     */
    public function restore(User $user, File $file)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the file.
     *
     * @param  \Idea\Models\User  $user
     * @param  \Idea\File  $file
     * @return mixed
     */
    public function forceDelete(User $user, File $file)
    {
        //
    }
}
