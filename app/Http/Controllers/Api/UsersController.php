<?php

namespace Idea\Http\Controllers\Api;
use DB;
use Idea\Models\User;
use Idea\Http\Resources\UserResource;
use Idea\Repositories\UsersRepository;
use Illuminate\Http\Request;
use Idea\Http\Controllers\Controller;

class UsersController extends Controller
{
    protected $repository;
  
    public function __construct (UsersRepository $u_rep) {
      $this->repository = $u_rep;
    }
  
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $users_id = DB::table('users')
                    ->join('meta_users', 'users.id', '=', 'meta_users.user_id')
                    ->where('email', 'like', "%".$request->input('search')."%")
                    ->orWhere('full_name', 'like', "%".$request->input('search')."%")
                    // ->orderBy($request->input('sortBy'), $request->input('orderBy'))
                    ->pluck('users.id');

        $users = User::whereIn('id', $users_id)
                    ->with('meta', 'articles')
                    // ->orderBy($request->input('sortBy'), $request->input('orderBy'))
                    ->paginate($request->input('paginate'));

        return UserResource::collection($users);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \Idea\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        $user->loadMissing(['meta', 'avatar']);
        return new UserResource($user);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \Idea\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Idea\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Idea\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
