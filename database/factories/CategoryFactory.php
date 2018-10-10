<?php

use Faker\Generator as Faker;

// $ruFaker = Faker\Factory::create("ru_RU");

$factory->define(Idea\Models\Category::class, function (Faker $faker) {
    $i = $faker->unique()->numerify('##');
    return [
        //
        'alias' => 'cat-'.$i,
        'parent_id' => 0,
        'name' => [
        	'ru' => 'Рубрика '. $i,
        	'en' => 'Category '. $i,
    				],
    ];
});
