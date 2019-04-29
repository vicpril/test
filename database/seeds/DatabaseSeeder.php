<?php

use Illuminate\Database\Seeder;

use App\Models\Article;
use App\Models\Issue;
use App\Models\MetaArticle;
use App\Models\User;
use App\Models\Job;
use App\Models\MetaUser;
use App\Models\Tag;
use App\Models\Category;


use Faker\Factory as Faker;

const USERS_COUNT = 25;
const ART_COUNT = 100;
class DatabaseSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		// $this->call(UsersTableSeeder::class);
		
		$faker = Faker::create('ru_RU');
		

	/**************************
	 *			Add Menus
	 **************************/

    	DB::table('menus')->insert([
    		'title' => 'О журнале',
    		'title_en' => 'About',
    		'path' => '/',
    	]);
    	DB::table('menus')->insert([
    		'title' => 'Свежий номер',
    		'title_en' => 'New Issue',
    		'path' => '/articles',
    	]);
    	DB::table('menus')->insert([
    		'title' => 'Архив',
    		'title_en' => 'Archive',
    		'path' => '/archive',
    	]);
    	DB::table('menus')->insert([
    		'title' => 'Редколлегия и Редсовет',
    		'title_en' => 'Editorial board',
    		'path' => '#',
    	]);
    	DB::table('menus')->insert([
    		'title' => 'Подписка и покупка',
    		
    		'path' => '#',
    	]);
    	DB::table('menus')->insert([
    		'title' => 'Как подать статью',
    		
    		'path' => '#',
    	]);
    	DB::table('menus')->insert([
    		'title' => 'Контакты',
    		'title_en' => 'Contacts',
    		'path' => '/contacts',
    	]);



	// /**************************
	//  *			Add Users
	//  **************************/
	// 	// Users
        $admin = User::create(
            [
                // 'name' => 'Admin',
                'email' => 'admin@la.fr',
                'alias' => 'admin',
                'password' => bcrypt('123'),
								'api_token' => str_random(60),
                'role' => 'admin',
                // 'valid' => true,
                // 'confirmed' => true,
                'remember_token' => str_random(10),
            ]
        );

        $redac = User::create(
            [
                // 'name' => 'Redactor',
                'email' => 'redac@la.fr',
                'password' => bcrypt('123'),
// 								'api_token' => str_random(60),
                'alias' => 'redac',
                'role' => 'redac',
                // 'valid' => true,
                // 'confirmed' => true,
                'remember_token' => str_random(10),
            ]
        );

        factory(User::class, USERS_COUNT)->create();
        sleep(1);

        $admin->meta()->save(MetaUser::where('id', 1)->first()->replicate());
        $admin->meta()->save(MetaUser::where('id', 2)->first()->replicate());
        $redac->meta()->save(MetaUser::where('id', 3)->first()->replicate());
        $redac->meta()->save(MetaUser::where('id', 4)->first()->replicate());


	/*************************
	 *			Add Jobs
	 *************************/
        for ($i=1; $i <= 15; $i++) { 
					$title = 'Университет-' . $i;
					$city = $faker->city;
					$address = $faker->address;
					Job::create( [
						'title_ru' => $title,
            'city_ru' => $city,
            'address_ru' => $address,
            'title_en' => Transliterate::make($title),
            'city_en' => Transliterate::make($city),
            'address_en' => Transliterate::make($address),
					] );
		}

	/**************************
	 *			Add Status
	 **************************/
	 	DB::table('status')->insert([
																	'title_en'=>'public',
																	'title_ru'=>'Опубликована'
																]);
	 	DB::table('status')->insert([
																	'title_en'=>'private',
																	'title_ru'=>'Черновик'
																]);

			
			
	// /**************************
	//  *			Add Categories
	//  **************************/
	$this->call([
        CategorySeeder::class,
        TagSeeder::class,

    ]);
	 	
	/**************************
	 *			Add Isuues
	 **************************/
		DB::table('issues')->insert([
			'year' => 2017,
			'tom' => 2017-2009+1,
			'no' => 2,
			'part' => 1,
			'full_no' => 32,
		]);

		DB::table('issues')->insert([
			'year' => 2017,
			'no' => 2,
	    'tom' => 2017-2009+1,
			'part' => 2,
	    'full_no' => 32,
		]);

		DB::table('issues')->insert([
			'year' => 2017,
			'no' => 3,
	    'tom' => 2017-2009+1,
			'part' => 1,
	    'full_no' => 33,
		]);

		DB::table('issues')->insert([
			'year' => 2017,
	        'tom' => 2017-2009+1,
			'no' => 3,
	        'full_no' => 33,
			'part' => 2,
		]);

		DB::table('issues')->insert([
			'year' => 2017,
	        'tom' => 2017-2009+1,
			'no' => 4,
	        'full_no' => 34,
			'part' => 1,
		]);

		DB::table('issues')->insert([
			'year' => 2017,
	        'tom' => 2017-2009+1,
			'no' => 4,
	        'full_no' => 34,
			'part' => 2,

		]);

		DB::table('issues')->insert([
			'year' => 2018,
	        'tom' => 2018-2009+1,
			'no' => 1,
	        'full_no' => 35,
			'part' => 1,
		]);

		DB::table('issues')->insert([
			'year' => 2018,
	        'tom' => 2018-2009+1,
			'no' => 1,
	        'full_no' => 35,
			'part' => 2,
		]);
	/**************************
	 *			Add Aticles
	 **************************/


	$articles = factory(Article::class, ART_COUNT)
					->create()
					->each(function ($a) {
						$a->meta()->save(factory(MetaArticle::class)->states('ru')->make());
						$a->meta()->save(factory(MetaArticle::class)->states('en')->make());
					});

    sleep(1);

		//set order
		$issues = Issue::with('articles')->get();
		$issues->each(function($issue) {
			$i = 1;
				$issue->articles()->each(function($a) use (&$i) {
					$a->update(['position' => $i]);
					$i++;
				});
		});
		
		
	/***************************************
	 *			Add Articles_User
	 ***************************************/
// 		for ($a=1; $a <= 30; $a++) { 
// 			$users = array(3,4,5,6,7,8,9,10);
// 			for ($i=1; $i <= random_int(1, 3); $i++) { 
// 				$user_key = array_rand($users);
// 				$user_id = $users[$user_key];
// 				DB::table('article_user')->insert([
// 						'article_id' => $a,
// 						'user_id' => $user_id,
// 					]);
// 				unset($users[$user_key]);
// 			}
// 		}
			
		for ($a=1; $a <= ART_COUNT; $a++) { 
			for ($i=1; $i <= random_int(1, 3); $i++) {
					DB::table('article_user')->insert([
						'article_id' => $a,
						'user_id' => random_int(3, USERS_COUNT-2)
					]);
			}
		}

	/***************************************
	 *			Add Articles_Tag
	 ***************************************/
		for ($a=1; $a <= ART_COUNT; $a++) { 
			$tags = array(1,2,3,4,5,6,7);
			for ($i=1; $i <= random_int(1, 2); $i++) { 
				$tag_key = array_rand($tags);
				$tag_id = $tags[$tag_key];
				DB::table('article_tag')->insert([
						'article_id' => $a,
						'tag_id' => $tag_id,
					]);
				Tag::find($tag_id)->touchUsed();
				unset($tags[$tag_key]);
			}
		}


	/***************************************
	 *			Add Articles_Category
	 ***************************************/
		for ($a=1; $a <= ART_COUNT; $a++) { 
			$categorys = array(1,2,3,4,5);
			for ($i=1; $i <= 1; $i++) { 
				$category_key = array_rand($categorys);
				$category_id = $categorys[$category_key];
				


				DB::table('article_category')->insert([
						'article_id' => $a,
						'category_id' => $category_id,
					]);
				Category::find($category_id)->touchUsed();
				unset($categorys[$category_key]);
			}
		}

	/***************************************
	 *			Add User_Job
	 ***************************************/
		for ($u=3; $u <= USERS_COUNT; $u++) { 
			$jobs = array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15);
			for ($i=1; $i <= random_int(1, 3); $i++) { 
				$job_key = array_rand($jobs);
				$job_id = $jobs[$job_key];
				DB::table('user_job')->insert([
						'user_id' => $u,
						'job_id' => $job_id,
					]);
				unset($jobs[$job_key]);
			}
		}

    }
}
