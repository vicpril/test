<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use Illuminate\Support\Facades\Blade;
use DB;
use App\Http\ViewComposers\HeaderComposer;

use App\Models\Article;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
//         Article::observe(\App\Observers\ArticleObserver::class);

        //for watching SQL-query
        DB::listen(function($query) {
            // dump($query->sql) ;
            // dump(request()->session());
            // dump(app()->getLocale());
        });

        Blade::component(env('THEME_BACK').'.back.components.alert', 'alert');
      
        // create custom directive for blade: @set($i,10)
        Blade::directive('set', function($exp) {
            list($name, $val) = explode(',', $exp);
            return "<?php $name = $val; ?>";
        });      

//         view()->composer('back/layout', HeaderComposer::class);

    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
