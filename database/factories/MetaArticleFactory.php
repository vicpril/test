<?php

// use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$ruFaker = Faker\Factory::create("ru_RU");
$enFaker = Faker\Factory::create("en_En");

$factory->define(App\Models\MetaArticle::class, function (Faker\Generator $faker) use ($ruFaker) {

	return [
        'lang' => 'ru',
    		'title' => $ruFaker->realtext($maxNbChars = 100, $indexSize = 2),
        
        'text' => $ruFaker->realtext($maxNbChars = 300, $indexSize = 2),
        'annotation' => $ruFaker->realtext($maxNbChars = 100, $indexSize = 2),
        'keywords' => implode(', ',$ruFaker->words($nb = 6, $asText = false)), 
    ];
});


$factory->state(App\Models\MetaArticle::class, 'ru', function (Faker\Generator $faker) use ($ruFaker) {

	return [
        'lang' => 'ru',
    	'title' => $ruFaker->realtext($maxNbChars = 100, $indexSize = 2),
        
        'text' => $ruFaker->realtext($maxNbChars = 300, $indexSize = 2),
        'annotation' => $ruFaker->realtext($maxNbChars = 100, $indexSize = 2),
        'keywords' => implode(', ',$ruFaker->words($nb = 6, $asText = false)), 
    ];
});

$factory->state(App\Models\MetaArticle::class, 'en', function (Faker\Generator $faker) use ($enFaker) {

	return [
        'lang' => 'en',
    	'title' => $enFaker->realtext($maxNbChars = 100, $indexSize = 2),
        
        'text' => $enFaker->realtext($maxNbChars = 300, $indexSize = 2),
        'annotation' => $enFaker->realtext($maxNbChars = 100, $indexSize = 2),
        'keywords' => implode(', ',$enFaker->words($nb = 6, $asText = false)), 
    ];
});
