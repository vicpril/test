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
// dd($ruFaker);
$enFaker = Faker\Factory::create("en_En");


$factory->define(Idea\Models\Article::class, function (Faker\Generator $faker) {

	$i = $faker->unique()->numerify('##');

	return [
        'alias' => 'article-'.$i,
        'doi' => 'doi-'.$i,
        'udk' => $faker->unique()->numerify('###'),
        'issue_id' => random_int(1, 8),
        'status_id' => random_int(1, 2),


    ];

});
