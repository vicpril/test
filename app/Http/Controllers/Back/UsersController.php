<?php

namespace Idea\Http\Controllers\Back;

use Idea\Http\Controllers\Back\AdminController;
use Idea\Http\Requests\UserRequest;
use Idea\Models\User;
use Idea\Repositories\UsersRepository;
use Illuminate\Http\Request;

class UsersController extends AdminController
{
//     use Indexable;

    public function __construct(UsersRepository $u_rep)
    {
        parent::__construct();

        $this->subtitle = "Авторы";

        $this->template = env('THEME_BACK') . '.back.users.index';

        $this->repository = $u_rep;

        $this->table = 'users';
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->subtitle = "Авторы";

        $this->template = env('THEME_BACK') . '.back.users.index';

        return $this->renderOutput();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->subtitle = "Новый автор";

        $this->template = env('THEME_BACK') . '.back.users.edit';

        return $this->renderOutput();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        $result = $this->repository->create($request->except('_token', '_method'));

        if (is_array($result) && !empty($result['error'])) {
            return back()->with($result);
        }
      
        return redirect(route('users.index'))->with($result);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        dd('user - show');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        $this->subtitle = "Редактировать автора";

        $this->template = env('THEME_BACK') . '.back.users.edit';

//         $user = $this->repository->get('*', ['id', $id]);
        //         if($user){
        //           $user->loadMissing(['meta', 'articles']);
        //         }

        return $this->renderOutput(['id' => $user->id]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $user)
    {
        $result = $this->repository->update($user, $request->except('_token', '_method'));

        if (is_array($result) && !empty($result['error'])) {
            return back()->with($result);
        }
      
        return redirect(route('users.index'))->with($result);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $result = $this->repository->deleteUser($user);
      
        if(request()->ajax()) {
          
          if (is_array($result) && ($result['status'] === 'success')) {
                $result = array_add($result, 'redirect', route('users.index'));
          }
          
          return response()->json($result);
          
        } else {
          
           if (is_array($result) && ($result['status'] !== 'success')) {
                return back()->with($result);
           } 
          
          return redirect(route('users.index'))->with($result);
        }
    
    }
}
