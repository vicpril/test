<?php

namespace App\Http\Controllers\Front;

use App\Models\Tag as Tag;
use App\Models\Category as Category;
use Corcel\Model\Post as cPost;
use Corcel\Model\Taxonomy as cTaxonomy;

class SpaController extends SiteController
{
    //

    public function index()
    {
        // $posts = cPost::where('post_type', 'post')
        //               ->status('publish')
        //               ->hasMeta('_edit_last')
        //               ->newest()
        //               ->get();

        $post = cPost::find(6168);
        // $post = wpPost::where('post_title', 'Современный подход к самоменеджменту: инверсивный анализ')->first();

        // dump(count($posts));
        // dump($posts);

        dump($post);

        $this->importTags();
        $this->importCategories($post);

        // dump($post->fileUpload);

        // foreach ($post->meta as $meta) {
        //   echo $meta->meta_key . " -> " . $meta->meta_value . "<br>";
        // }

        // dump($posts);
        //         dump($post->meta->where('meta_key', 'coauthor'));

        // USER
        //       $user = User::where('display_name', $post->coauthor)->first();

//       dump($user);

        // foreach( $post->users as $user) {
        //   dump($user->attr('us_name_en'));

        //     foreach ($user->meta as $meta) {
        //       echo $meta->meta_key . " -> " . $meta->meta_value . "<br>";
        //       echo $meta->meta_key . "<br>";

        //     }

        // }

        //Main FileUpload
        //       $fileId = $post->meta->where("meta_key", "File Upload")->first()->meta_value;
        //         dump($post->find($fileId)->guid);
        //         dump($post->find($fileId)->meta->first()->meta_value);

//         dump($post->title_en);

        return 'hello';

        return view('spa');
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
