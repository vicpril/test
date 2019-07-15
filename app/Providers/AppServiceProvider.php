<?php

namespace App\Providers;

use DB;
use App\Models\Article;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;
use App\Http\ViewComposers\HeaderComposer;

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

        // Localization Carbon
        \Carbon\Carbon::setLocale(config('app.locale'));
        setLocale(LC_TIME, (config('app.locale') == 'ru')? 'ru_RU.UTF-8': 'en_US.UTF-8');

        //for watching SQL-query
        DB::listen(function($query) {
            // dump($query->sql) ;
            // dump(request()->session());
            // dump(app()->getLocale());
        });

        Blade::component('back.components.alert', 'alert');
      
        // create custom directive for blade: @set($i,10)
        Blade::directive('set', function($exp) {
            list($name, $val) = explode(',', $exp);
            return "<?php $name = $val; ?>";
        });
      
        Blade::directive('articleDate', function ($expression) {
            return "<?php echo ($expression)->format('d.m.Y'); ?>";
        });
      
        Blade::if('admin', function () {
            return !auth()->guest() && auth()->user()->role === 'admin';
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
        
    }
}
