<?php

use Faker\Generator as Faker;

// $ruFaker = Faker\Factory::create("ru_RU");

$factory->define(App\Models\Category::class, function (Faker $faker) {
    $i = $faker->unique()->numerify('##');
    return [
        //
        'alias' => 'cat-'.$i,
        'parent_id' => 0,
        'title_ru' => 'Рубрика '. $i,
        'title_en' => 'Category '. $i,
    ];
});
