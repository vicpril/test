<?php

namespace App\Http\Controllers\Front;

use App\Models\Tag as Tag;
use App\Models\Category as Category;
use App\Models\User as User;
use App\Models\Article as Article;
use App\Models\Issue as Issue;
use App\Models\WP\User as wpUser;
use App\Models\WP\Post as wpPost;

use Corcel\Model\Post as cPost;
use Corcel\Model\Taxonomy as cTaxonomy;

use App\Repositories\UsersRepository;
use App\Repositories\ArticlesRepository;

use Illuminate\Support\Collection;

class SpaController extends SiteController
{
    protected $u_rep;
    protected $a_rep;

    public function __construct (UsersRepository $u_rep, ArticlesRepository $a_rep) {
        $this->u_rep = $u_rep;
        $this->a_rep = $a_rep;
    }

    public function index()
    {
        $posts = cPost::where('post_type', 'post')
                      ->status('publish')
                      ->hasMeta('stol', 'yes')
                      ->newest()
                      ->get();

        dump($posts);
        
        $articles = Article::where('stol', 1)
                      ->get();

        dump($articles);             

        $post = wpPost::find(8726);
        // $post = wpPost::where('post_title', 'Современный подход к самоменеджменту: инверсивный анализ')->first();

        // dump(count($posts));
        // dump($posts);

        // dump($post);

        // $this->importTags();
        // $this->importCategories($post);
        // $this->importUsers($post);
        // $this->importPosts($post);

        // dump($post->fileUpload);

        // foreach ($post->meta as $meta) {
        //   echo $meta->meta_key . " -> " . $meta->meta_value . "<br>";
        // }

        
        //         dump($post->meta->where('meta_key', 'coauthor'));



       

        //Main FileUpload
        //       $fileId = $post->meta->where("meta_key", "File Upload")->first()->meta_value;
        //         dump($post->find($fileId)->guid);
        //         dump($post->find($fileId)->meta->first()->meta_value);

//         dump($post->title_en);

        return 'hello';

        return view('spa');
    }

    public function importPosts($post) 
    {
        $posts = wpPost::where('post_type', 'post')
                        ->status('publish')
                          ->hasMeta('_edit_last')
                        ->hasMeta('trigger-title', 1)
                        // ->hasMeta('yearno', 2019)
                        // ->hasMeta('no', 2)
                        // ->hasMeta('tom', 1)
                        ->oldest()
                        // ->take(500)
                        ->get()
                        ->sortBy('yearno');
                        ;
        // foreach ($posts as $i => $post) {
        //     if (!$post->yearno || !$post->no || !$post->tom) {
        //         # code...
        //         dump($post->yearno ." -> ". $post->no ." -> ".$post->tom ." -> ". $post->title);
        //     }
        // }

        // dump(count($posts));

        // return;


        // foreach ($post->meta as $meta) {
        //   echo $meta->meta_key . " -> " . $meta->meta_value . "<br>";
        // }

        $done = 0;

        foreach ($posts as $post) {
            /*
                if ($post->attr('trigger-title') == 1) {
                    // dump($post);
                    continue;
                }
                if (!$post->yearno || !$post->no || !$post->tom) {
                    # code...
                    // dump($post->yearno ." -> ". $post->no ." -> ".$post->tom ." -> ". $post->title);
                    continue;
                }


                $data['alias'] = $post->slug;

                $data["title_ru"] = $post->post_title; # "Ну поезжай, ври ей чепуху! Вот картуз твой. — Нет, возьми-ка нарочно, пощупай уши! Чичиков в."
                $data["title_en"] = ($post->attr('title_en')) ?: ""; # "Hatter. 'I deny it!' said the Hatter. 'You might just as she spoke; 'either you or your head must."
                
                // dump($post->users);
                if (count($post->users) > 0) {
                    $post->users_id = $post->users->map(function($user){
                        return User::where('alias', $user->slug)->first()->id;
                    });
                } else {
                    $post->users_id = null;
                }
                // dump($post->users_id);
                $data["users"] = ($post->users_id) ? $post->users_id->toArray() :null ; # array:3 [▼
                                                                                                    #  0 "292"
                                                                                                    #  1 "73"
                                                                                                    #  2 "625"
                                                                                                    #]
        // $cat = $post->taxonomies()->where('taxonomy', 'category')->get();
                $cat = $post->taxonomies()->where('taxonomy', 'category')->first();
                $cat_id = ($cat) ? Category::where('alias', $cat->slug)->first()->id : Category::where('alias', 'no-rubrik')->first()->id;
                $data["categories"] =  $cat_id ; # "65"


                $tags = $post->taxonomies()->where('taxonomy', 'post_tag')->get();
                $tags = (count($tags) > 0) ? 
                    $tags->map(function($tag){
                        return Tag::where('alias', $tag->slug)->first()->id;
                    })->toArray()
                    : null;
                $data["tags"] = $tags ; # array:2 [▼
                                                #     0 "6"
                                                #     1 "5"
                                                #     ]
                $data["text_ru"] = ($post->yearno != 2009) ? $post->content : "" ; # "<p>text ru</p>"
                $data["text_en"] = "" ; # "<p>text ru</p>"
                $data["file_ru"] = ($post->fileUpload)? 'uploads/' . $post->fileUpload: null ; # "uploads/2019/04/прайс лены.pdf"
                $data["file_en"] = $post->attr('file_en') ; # "uploads/userphoto/23.jpg"
                $data["file_audio"] = ($post->attr('audio')) ? 'uploads/' . $post->attr('audio') : null ; # "uploads/2019/07/RF_OnPhLjRg.jpg"
                $data["udk"] =  $post->udk; # "2674/fdg-dfg"
                $data["annotation_ru"] = $post->attr('annotation') ; # "<p>annot ru</p>"
                $data["doi"] = $post->doi ; # "458043985-dfgdf"
                $data["keywords_ru"] = $post->attr('keywords') ; # "keywords ru"
                $data["date_arrival"] = $post->attr('date_arrival') ? date("Y-m-d", strtotime($post->attr('date_arrival'))) : null; # "2019-07-12"
                $data["date_review"] = $post->attr('data_review') ? date("Y-m-d", strtotime($post->attr('data_review'))) : null ; # "2019-07-23"
                $data["applications"] = $post->attr('addons') ; # "<p>add ru</p>"
                $data["annotation_en"] = $post->attr('annotation_en') ; # "<p>add en</p>"
                $data["keywords_en"] = $post->attr('key_en') ; # "key en"
                $data["finance"] = $post->attr('financ')  ; # "finance"
                $data["bibliography_ru"] = $post->attr('literatura') ; # "<p>lit ru</p>"
                $data["bibliography_en"] = $post->attr('literatura_en') ; # "<p>lit en</p>"
                $data["status"] =  ($post->status === 'publish')? true : false ; # "false"
                $data["year"] = $post->yearno ; # "2017"
                $data["tom"] = $data["year"] - 2009 + 1 ; # "9"
                $data["no"] = $post->no ; # "1"
                $data["full_no"] = ($data["year"] - 2009 - 1) * 4 + 2 + $data["no"] ; # "31"
                $data["part"] = ($post->tom) ?: 1 ; # "1"
                $data["stol"] = ($post->stol === "no") ? false : true ; # "false"
                $data["position"] = $post->menu_order + 1;

                $this->a_rep->create($data);

                // dump($data);
            */

            // Issue TITLE LIST
                // dump('ru- '. $post->fileTitleRu);
                // dump('en- '. $post->fileTitleEn);

                // $issue = Issue::where([
                //     'year' => $post->yearno,
                //     'no' => $post->no, 
                //     'part' => $post->tom
                // ])->first();

                // $issue->update([
                //     'file_title_ru' => ($post->fileTitleRu) ? "uploads/" . $post->fileTitleRu : null,
                //     'file_title_en' => ($post->fileTitleEn) ? "uploads/" . $post->fileTitleEn : null,
                // ]);
                
                // $done++;
            }
    
            dump(count($posts));
            dump("done - $done");

    }



    public function importUsers($post) 
    {
        // USER
        // $users = wpUser::where('id', 23)
        $users = wpUser::select()
                        // ->take(50)
                        // ->count()
                        ->get()
                        // ->first()
                        ;

        // dump(unserialize($users[5]->meta->wp_capabilities));
        // dump($user);

        $done = 0;

        foreach( $users as $user) {
            if (!$user->first_name) {
                continue;
            }
            // dump($user->avatar);

            // foreach ($user->meta as $meta) {
            //     echo $meta->meta_key . " -> " . $meta->meta_value . "<br>";
            //     echo $meta->meta_key . "<br>";

            // }

        // }

            $data["full_name"] =   $user->first_name;  #"Прилепин Виктор Анатольевич"
            $data["email"] =  $user->email ;  #"prilepin-viktor-anatolevich@localhost.lo"
            // $data["email"] =  random_bytes(25) ;  #"prilepin-viktor-anatolevich@localhost.lo"

            $data["alias"] =  $user->slug ;  #"prilepin-v-a-"
            $data["last_name_ru"] =  $user->attr('us_last-name') ;  #"Прилепин"
            $data["first_name_ru"] = $user->attr('us_first-name')  ;  #"Виктор"
            $data["patronymic_ru"] = $user->attr('us_patronymic')  ;  #"Анатольевич"
            $data["initials_ru"] = $user->attr('us_initials') ;  #"В.А."
            $data["short_name_ru"] = $data["last_name_ru"] . ' ' . $data["initials_ru"]  ;  #"Прилепин В.А."
            $data["last_name_en"] = $user->attr('us_name_en')  ;  #"Prilepin"
            $data["first_name_en"] = $user->attr('us_initials_en')  ;  #"Viktor"
            $data["patronymic_en"] =  '' ;  #"Anatolevich"
            $data["initials_en"] =  $user->attr('us_initials_en') ;  #"V.A."
            $data["short_name_en"] =  $data["last_name_en"] . ' ' . $data["initials_en"] ;  #"Prilepin V.A."
            $data["orcid"] =  ($user->attr('us_orcid')) ?: null ;  #"123-456"
            $data["degree_ru"] =   $user->attr('us_stepen');  #"степепень ру"
            $data["degree_en"] =  $user->attr('us_stepen_en') ;  #"степень анг"
            
            $jobs = [];
            $jobs = [];
            $jobs_en = [];

            if ($user->attr('us_post') || $user->attr('us_post_en')) {
                $jobs[] = ( $user->attr('us_post') ) ?: null;
                $jobs_en[] = ( $user->attr('us_post_en') ) ?: null;
            }
            if ($user->attr('us_post2') || $user->attr('us_post2_en')) {
                $jobs[] = ( $user->attr('us_post2') ) ?: null;
                $jobs_en[] = ( $user->attr('us_post2_en') ) ?: null;
            }
            if ($user->attr('us_post3') || $user->attr('us_post3_en')) {
                $jobs[] = ( $user->attr('us_post3') ) ?: null;
                $jobs_en[] = ( $user->attr('us_post3_en') ) ?: null;
            }
            if ($user->attr('us_post4') || $user->attr('us_post4_en')) {
                $jobs[] = ( $user->attr('us_post4') ) ?: null;
                $jobs_en[] = ( $user->attr('us_post4_en') ) ?: null;
            }
            if ($user->attr('us_post5') || $user->attr('us_post5_en')) {
                $jobs[] = ( $user->attr('us_post5') ) ?: null;
                $jobs_en[] = ( $user->attr('us_post5_en') ) ?: null;
            }
            
            $data["jobs_ru"] = $jobs  ;  #array:2 [▶]
            $data["jobs_en"] = $jobs_en ;  #array:2 [▶]
            // $data["description_ru"] =   $user->attr('description')  ;  #"<p><em>биогр </em>ру</p>"
            // $data["description_en"] =   $user->attr('description_en');  #"<p style="text-align:center"><s>биогр анг</s></p>"
            $data["description_ru"] =   preg_replace("/[\n]/","<br/>",$user->attr('description'));  ;  #"<p><em>биогр </em>ру</p>"
            $data["description_en"] =   preg_replace("/[\n]/","<br/>",$user->attr('description_en'));  ;  #"<p><em>биогр </em>ру</p>"

            $photo = $user->attr('userphoto_image_file');
            $data["avatar"] = ($photo) ? "uploads/userphoto/" . $photo : null ;  #"uploads/2019/07/wOP6nrJmMb4.jpg"

            // dump($data);

            $this->u_rep->create($data);

            $done++;
        }

        dump(count($users));
        dump("done - $done");

    }


    public function importCategories($post)
    {
        /*
         *  TAXONOMIES
         *  Categories
         */
        $tax_tr = cTaxonomy::where('taxonomy', 'term_translations')
        // ->where('term_id', 911)
        // ->take(50)
            ->get();
        $tax_tr = $tax_tr->map(function ($item) {
            return (unserialize($item->description)) ?: false;
        });

        $tax_ru = cTaxonomy::where('taxonomy', 'category')
                        ->where('term_id', 22)
                        ->take(15)
                        ->get()->first();

        $tax_tr = $tax_tr->map(function ($cat) {
            $cat = collect($cat);
            $cat = $cat->map(function ($tr_id) {
                $tax = cTaxonomy::where('taxonomy', 'category')
                    ->where('term_id', $tr_id)
                    ->first();

                return (is_object($tax)) ? [
                    'title' => $tax->name,
                    'term_id' => $tax->term_id,
                    'slug' => $tax->slug,
                ] : false;
            });
            return $cat;
        })->reject(function ($cat) {
            return (isset($cat['ru']) && $cat['ru'] == false) || (isset($cat['en']) && $cat['en'] == false);
        })
        ->each(function ($tag) {
            $tag['term_id'] = (isset($tag['ru'])) ? $tag['ru']['term_id'] : $tag['en']['term_id'];
            $tag['alias'] = (isset($tag['ru'])) ? $tag['ru']['slug']  : $tag['en']['slug'];;
            $tag['ru'] = (isset($tag['ru'])) ? $tag['ru']['title'] : '';
            $tag['en'] = (isset($tag['en'])) ?$tag['en']['title'] : '';
            // $tag = collect($tag);
        })
        ;

        
        // dump($tax_tr->where('term_id', 774));

        /*
         *       Write Tags to database
         */

        $tax_tr->each(function ($tag) {
            Category::create([
                'title_ru' => $tag['ru'],
                'title_en' => $tag['en'],
                'alias' => $tag['alias'],
                'term_id' => $tag['term_id'],
            ]);
        });
        
        // $tax_tr = $tax_tr->map(function ($cat) {
        //     return count($cat);
        // });
        // var_dump($tax_tr->sum());

        // $tag = $post->taxonomies()->where('taxonomy', 'post_tag')->get();
        // $cat = $post->taxonomies()->where('taxonomy', 'category')->get();

        // dump($tag, $cat);

    }

    public function importTags()
    {
        /*
         *  TAXONOMIES
         *  TAGS
         */

        $tax_tr = cTaxonomy::where('taxonomy', 'term_translations')
        // ->where('term_id', 911)
        // ->take(50)
            ->get();
        $tax_tr = $tax_tr->map(function ($item) {
            return (unserialize($item->description)) ?: false;
        });

        $tax_tr = $tax_tr->map(function ($tag) {
            $tag = collect($tag);
            $tag = $tag->map(function ($tr_id) {
                $tax = cTaxonomy::where('taxonomy', 'post_tag')
                    ->where('term_id', $tr_id)
                    ->first();
                return (is_object($tax)) ? [
                    'title' => $tax->name,
                    'term_id' => $tax->term_id,
                    'slug' => $tax->slug,
                ] : false;
            });
            return $tag;
        })
            ->reject(function ($tag) {
                return (isset($tag['ru']) && $tag['ru'] == false) || (isset($tag['en']) && $tag['en'] == false);
            })
            ->each(function ($tag) {
                $tag['term_id'] = $tag['ru']['term_id'];
                $tag['alias'] = $tag['ru']['slug'];
                $tag['ru'] = $tag['ru']['title'];
                $tag['en'] = $tag['en']['title'];
                // $tag = collect($tag);
            })
        ;

        dump($tax_tr);

        /*
         *       Write Tags to database
         */

        $tax_tr->each(function ($tag) {
            Tag::create([
                'title_ru' => $tag['ru'],
                'title_en' => $tag['en'],
                'alias' => $tag['alias'],
                'term_id' => $tag['term_id'],
            ]);
        });
    }
}
