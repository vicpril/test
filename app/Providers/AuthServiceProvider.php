<?php

namespace Idea\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

use Idea\Models\Article;
use Idea\Policies\ArticlePolicy;
use Idea\Models\Job;
use Idea\Policies\JobPolicy;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'Idea\Model' => 'Idea\Policies\ModelPolicy',
        Article::class => ArticlePolicy::class,
        Job::class => JobPolicy::class,


    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

    }
}
