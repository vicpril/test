<?php 

namespace App\Repositories;

use App\Models\Tag;

class TagsRepository extends Repository{

	

	public function __construct(Tag $tag) {
		$this->model = $tag;

	}



}