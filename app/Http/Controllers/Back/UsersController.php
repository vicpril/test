<?php

namespace Idea\Http\Controllers\Back;

use Illuminate\Http\Request;
use Idea\Http\Requests\UserRequest;
use Idea\Http\Controllers\Back\AdminController;
use Idea\Repositories\UsersRepository;

class UsersController extends AdminController
{
//     use Indexable;

    public function __construct(UsersRepository $u_rep) {
        parent::__construct();

        $this->subtitle = "Авторы";

        $this->template = env('THEME_BACK').'.back.users.index';
        
        $this->repository = $u_rep;
       
        $this->table = 'users';
    }

    public function profile() {
      
        $this->subtitle = "Аватар";

        $this->template = env('THEME_BACK').'.back.users.profile';
      
        $user = auth()->user();

        return $this->renderOutput(compact('user', $user));
    }
  
  public function update_avatar(Request $request) {
        $request->validate([
            'avatar' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
    
    $user = auth()->user();
    
    $avatarName = $user->id.'_avatar'.time().'.'.request()->avatar->getClientOriginalExtension();
    
    $request->avatar->storeAs('avatars',$avatarName);
    
    $user->avatar = $avatarName;
    $user->save();
    
    return back()
            ->with('success','You have successfully upload image.');

  }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->subtitle = "Авторы";

        $this->template = env('THEME_BACK').'.back.users.index';  
      
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

        $this->template = env('THEME_BACK').'.back.users.create';

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
        $result = $this->repository->create($request->except('_token'));
      
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
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
