<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        
        parent::boot();

        Route::pattern('articleAlias','[\w-]+');
      
        // Bind parameters for Client
        Route::bind('articleAlias', function($value) {
            $object = \App\Models\Article::where('alias', $value)->first();
            return $object ?: abort(404, 'Статья не найдена');
        });

        Route::bind('pageAlias', function($value) {
            $object = \App\Models\Page::where('alias', $value)->first();
            return $object ?: abort(404, 'Страница не найдена');
        });
      
        Route::bind('tagAlias', function($value) {
//             dd($value);
            $object = \App\Models\Tag::where('alias', $value)->first();
            return $object ?: abort(404, 'Страница не найдена');
        });
        
      
        // Bind parameters for ADMIN
        Route::bind('issue', function($value) {
            return \App\Models\Issue::where('id', $value)->first();
        });
      
        Route::bind('article', function($value) {
            return \App\Models\Article::where('id', $value)->first();
        });
      
        Route::bind('user', function($value) {
            return \App\Models\User::where('id', $value)->first();
        });
      
        Route::bind('category', function($value) {
            return \App\Models\Category::where('id', $value)->first();
        });
      
        Route::bind('tag', function($value) {
            return \App\Models\Tag::where('id', $value)->first();
        });

        Route::bind('page', function($value) {
            return \App\Models\Page::where('id', $value)->first();
        });

        Route::bind('menu', function($value) {
            return \App\Models\Menu::where('id', $value)->first();
        });
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapApiRoutes();

        $this->mapWebRoutes();

        //
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::middleware('web')
             ->namespace($this->namespace)
             ->group(base_path('routes/web.php'));
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::prefix('api')
             ->middleware('api')
             ->namespace($this->namespace)
             ->group(base_path('routes/api.php'));
    }
}
