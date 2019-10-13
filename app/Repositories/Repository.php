<?php

namespace App\Repositories;

use DB;

abstract class Repository
{

    protected $model = false;

    //void get
    public function get($select = '*', $where = [], $orderBy = false, $pagination = false)
    {

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

    public function one($param)
    {
        $result = $this->model->where('alias', $param)->first();
        return $result;
    }

    public function all()
    {
        $result = $this->model->all();
        return $result;
    }

//   public function create($data);

    public function find($id)
    {
        return $result = $this->model->find($id);
    }

    public function delete($id)
    {
        return $this->model->find($id)->delete();
    }

    /*
     *
     * Get unique aliad/name
     *
     */
    public function getUnique($title, $table, $field, $i = 0)
    {
        $check = ($i > 0) ? $title . '-' . $i : $title;

        if (DB::table($table)->where($field, $check)->exists()) {

            $check = $this->getUnique($title, $table, $field, $i + 1);

        }

        return $check;
    }

}
