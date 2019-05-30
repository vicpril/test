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

$factory->define(App\Models\Article::class, function (Faker\Generator $faker) {

    $i = $faker->unique()->numerify('####');
    $c1 = $faker->numerify('##');
    $c2 = $faker->numerify('##');

    $date_arrival = $faker->dateTimeBetween($startDate = '-5 years', $endDate = 'now', $timezone = null);
    $date_review = $faker->dateTimeBetween($startDate = $date_arrival, $endDate = 'now', $timezone = null);

    return [
        'alias' => 'article-' . $i,
        'doi' => '10.17212/2075-0862-2019-11.1.1-'.min($c1,$c2).'-'.max($c1,$c2).'',
        'udk' => $faker->unique()->numerify('####'),
        'issue_id' => random_int(1, 8),
        'status_id' => random_int(1, 2),
        'stol' => $faker->boolean(),
        'date_arrival' => $date_arrival,
        'date_review' => $date_review,
        'applications' => $faker->realtext($maxNbChars = 300, $indexSize = 2),
        'finance' => $faker->realtext($maxNbChars = 300, $indexSize = 2),


    ];

});
