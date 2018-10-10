<?php 

namespace Idea\Repositories;

use Idea\Models\Category;

class CategoriesRepository extends Repository{

	

	public function __construct(Category $category) {
		$this->model = $category;

	}



}