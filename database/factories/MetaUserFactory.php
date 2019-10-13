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

$name = $ruFaker->name;
$i = $ruFaker->numerify('####');

$factory->state(App\Models\MetaUser::class, 'ru', function (Faker\Generator $faker) use ($name, $i) {
    $e = explode(' ', $name);
    $ini = explode('', $e[0])+'.'+explode('', $e[1])+'.';
    return [
        'lang' => 'ru',
        'full_name' => $name,
        'first_name' => $e[0],
        'last_name' => $e[2],
        'patronymic' => $e[1],
        'short_name' => $e[2] . ' ' . $ini,
        'initials' => $ini,
        'post' => 'Должность - ' . $i,
        'description' => 'Биография - ' . $i,
    ];
});

$factory->state(App\Models\MetaUser::class, 'en', function (Faker\Generator $faker) use ($name, $i) {
    $e = explode(' ', $name);
    $ini = explode('', $e[0])+'.'+explode('', $e[1])+'.';
    return [
        'lang' => 'en',
        'full_name' => $name,
        'first_name' => $e[0],
        'last_name' => $e[2],
        'patronymic' => $e[1],
        'short_name' => $e[2] . ' ' . $ini,
        'initials' => $ini,
        'post' => 'Должность - ' . $i,
        'description' => 'Биография - ' . $i,
    ];
});
