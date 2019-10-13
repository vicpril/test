<?php

namespace App\Repositories;

use App\Models\Menu;
use App\Models\MetaMenu;
use Menu as LavaryMenu;

class MenusRepository extends Repository
{

    public function __construct(Menu $menu)
    {
        $this->model = $menu;
    }

    /*
     *
     *    Get menu for Client (LavaryMenu) by position, lang
     *
     */

    public function getMenu($position = 'top', $lang = 'ru')
    {

        $menu = Menu::where([
            'position' => $position,
            'lang' => $lang,
        ])
            ->with('meta')
            ->first()
            ->links
            ->sortBy('order');

        $mBuilder = LavaryMenu::make(ucfirst($position) . 'Nav', function ($m) use ($menu) {

            foreach ($menu as $item) {

                if ($item->parent == 0) {
                    $m->add($item->title, $item->url)->id($item->id);
                } else {
                    if ($m->find($item->parent)) {
                        $m->find($item->parent)->add($item->title, $item->url)->id($item->id);
                    }
                }
            }

        });

        return $mBuilder;
    }

    /*
     *
     *    Get categories for admin
     *
     */
    public function getAllMenus()
    {
        return $this->model->with(['meta' => function ($query) {
            $query->orderBy('order', 'asc');
        }])->get();
    }

    /*
     *
     *   Update menu
     *
     */
    public function update(Menu $menu, $data)
    {
        $menu->update([
            'title' => $data['title'],
        ]);

        $menu->links()->each(function ($link) {
            $link->menu()->dissociate()->save();
        });

        foreach ($data['links'] as $newLink) {
            $link = (isset($newLink['id'])) ? MetaMenu::find($newLink['id']) : MetaMenu::create();
            $link->update($newLink);
            $menu->meta()->save($link);
        }

        MetaMenu::doesntHave('menu')->delete();

        return [
            'status' => 'success',
            'message' => 'Меню обновлено',
        ];
    }

}
