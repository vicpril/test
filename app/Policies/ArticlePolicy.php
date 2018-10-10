<?php

namespace Idea\Policies;

use Idea\Models\User;
use Idea\Models\Article;
use Illuminate\Auth\Access\HandlesAuthorization;

class ArticlePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can manage the article.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Article  $article
     * @return mixed
     */
    public function manage(User $user, Article $article)
    {
        return $user->role === 'admin';
    }
}
