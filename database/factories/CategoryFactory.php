<?php

use Faker\Generator as Faker;

// $ruFaker = Faker\Factory::create("ru_RU");

$factory->define(Idea\Models\Category::class, function (Faker $faker) {
    $i = $faker->unique()->numerify('##');
    return [
        //
        'alias' => 'cat-'.$i,
        'parent_id' => 0,
        'name_ru' => 'Рубрика '. $i,
        'name_en' => 'Category '. $i,
    ];
});
