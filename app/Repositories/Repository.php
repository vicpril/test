<?php 

namespace Idea\Repositories;

use Config;

abstract class Repository {

	protected $model = FALSE;

	//void get
	public function get($select = '*', $where = FALSE, $orderBy = FALSE, $pagination = FALSE) {

		$builder = $this->model->select($select);

		if ($where) {
			$builder = $builder->where($where[0], $where[1]);
		}
		
		if ($orderBy) {
			$builder = $builder->orderBy($orderBy, 'asc');
		}
		
		if ($pagination) {
			return $builder->paginate($pagination);
		}
		
		return $builder->get();
	}

	public function one($param) {
		if(is_int($param))
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
	
  public function delete($id) {
			return $this->model->find($id)->delete();
	}

//   public function update($id, array $data);

}

?>