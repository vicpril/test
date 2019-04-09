<?php

use Illuminate\Database\Seeder;
use App\Models\Tag as Tag;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $tags = [
        		'искусствоведение',
				    'история',
				    'культурология',
				    'образование',
				    'социология',
				    'философия',
				    'экономика',
        		];
       	foreach ($tags as $i => $tag) {

       		Tag::make([
       			'alias' => 'tag-'.$i,
						'title_ru' => $tag,
        		'title_en' => Transliterate::make($tag),
       		])->save();
       	}
    }
}
