<?php 

namespace Idea\Repositories;

use Config;

abstract class Repository {

	protected $model = FALSE;

	//void get
	public function get($select = '*', $where = FALSE, $orderBy = FALSE) {

		$builder = $this->model->select($select);


		if ($where) {
			$builder = $builder->where($where[0], $where[1]);
		}

		if ($orderBy) {
			$builder = $builder->orderBy($orderBy, 'asc');
		}

		return $builder->get();
	}

	public function one($alias) {
		$result = $this->model->where('alias', $alias)->first();
		return $result;
	}

	public function all() {
		$result = $this->model->all();
		return $result;
	}
	

//   public function create($data);

  public function find($id) {
		return $result = $this->model->find($id);
	}
	
//   public function delete($id);

//   public function update($id, array $data);

}

?>