<?php 

namespace Idea\Repositories;

use Idea\Models\Tag;

class TagsRepository extends Repository{

	

	public function __construct(Tag $tag) {
		$this->model = $tag;

	}



}