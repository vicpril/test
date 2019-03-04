<?php

// use Faker\Generator as Faker;

use Idea\Models\MetaUser as MetaUser;
// use Transliterate;

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
$localisedFaker = Faker\Factory::create("ru_RU");

$factory->define(Idea\Models\User::class, function (Faker\Generator $faker) use ($localisedFaker) {

    return [
        // 'name' => $localisedFaker->name,
        'email' => $localisedFaker->unique()->safeEmail,
        'password' => bcrypt('123'),
        'alias' => 'user-' . $localisedFaker->unique()->numerify('####'),
        'role' => 'author',
        'orcid' => str_random(6),
    ];
});

$factory->afterCreating(Idea\Models\User::class, function ($user, $faker) use ($localisedFaker) {
    
    $i = $localisedFaker->numerify('####');

    $gender = $faker->randomElements(['male', 'female'])[0];

    $name = ($gender == 'female') ? $localisedFaker->firstName($gender) . ' ' . $localisedFaker->middleName($gender) . ' ' .$localisedFaker->lastName . 'a' : $localisedFaker->firstName($gender) . ' ' . $localisedFaker->middleName($gender) . ' ' .$localisedFaker->lastName;


	$e = explode(' ', $name);

	$args_ru = [
        'lang' => 'ru',
    		'full_name' => $e[2].' '.$e[0].' '.$e[1],
        'first_name' => $e[0],
        'last_name' => $e[2],
        'patronymic' => $e[1],
        'initials' => mb_substr($e[0], 0, 1) . '.' . mb_substr($e[1], 0, 1) . '.',
        'post' => 'Должность - '. $i,
        'description' => 'Биография - ' . $i,
    ];

    $name = Transliterate::make($name);
    $e = explode(' ', $name);

    $args_en = [
        'lang' => 'en',
    		'full_name' => $e[2].' '.$e[0].' '.$e[1],
        'first_name' => $e[0],
        'last_name' => $e[2],
        'patronymic' => $e[1],
        'initials' => substr($e[0], 0, 1) . '.' . substr($e[1], 0, 1) . '.',
        'post' => 'Post - '. $i,
        'description' => 'Biography - ' . $i,
    ];


    // $meta = new MetaUser($args_ru)->make();
    $user->meta()->save(MetaUser::make($args_ru));
    $user->meta()->save(MetaUser::make($args_en));
});
