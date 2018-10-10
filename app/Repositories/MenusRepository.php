<?php 

namespace Idea\Repositories;

use Idea\Models\Menu;

class MenusRepository extends Repository{

	public function __construct(Menu $menu) {
		$this->model = $menu;
	}

}

?>