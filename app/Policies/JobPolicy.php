<?php

namespace Idea\Policies;

use Idea\Models\User;
use Idea\Models\Job;
use Illuminate\Auth\Access\HandlesAuthorization;

class JobPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the job.
     *
     * @param  \Idea\Models\User  $user
     * @param  \Idea\Job  $job
     * @return mixed
     */
    public function view(User $user, Job $job)
    {
        return true;
    }

    /**
     * Determine whether the user can create jobs.
     *
     * @param  \Idea\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can update the job.
     *
     * @param  \Idea\Models\User  $user
     * @param  \Idea\Job  $job
     * @return mixed
     */
    public function update(User $user, Job $job)
    {
        return $user->role === 'admin';
    }

    /**
     * Determine whether the user can delete the job.
     *
     * @param  \Idea\Models\User  $user
     * @param  \Idea\Job  $job
     * @return mixed
     */
    public function delete(User $user)
    {
        return $user->role === 'admin';

    }

    /**
     * Determine whether the user can restore the job.
     *
     * @param  \Idea\Models\User  $user
     * @param  \Idea\Job  $job
     * @return mixed
     */
    public function restore(User $user, Job $job)
    {
        return $user->role === 'admin';
    }

    /**
     * Determine whether the user can permanently delete the job.
     *
     * @param  \Idea\Models\User  $user
     * @param  \Idea\Job  $job
     * @return mixed
     */
    public function forceDelete(User $user, Job $job)
    {
        return $user->role == 'admin';
    }

    public function manage(User $user, Job $job)
    {
        return $user->role == 'admin';
    }
}
