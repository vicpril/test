<?php 

namespace App\Repositories;

use App\Models\SideMenu;

class SideMenusRepository extends Repository{

	public function __construct(SideMenu $side_menu) {
		$this->model = $side_menu;
	}

}

?>