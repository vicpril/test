<?php

namespace Idea\Http\Controllers\Auth;

use Idea\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/admin';
  
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /*
    *   Custom loginForm
    */
    public function showLoginForm() {
        if (view()->exists(env('THEME').'.login')) {
            return view(env('THEME').'.login')->with('title', 'Вход на сайт');
        }
        abort(404);
    }

/*--------------------------------------------------------------*/

    /**
     * Get the login username to be used by the controller.
     *
     * @return string
     */
    public function username()
    {
        return 'email';
    }

    /**
     * Get the needed authorization credentials from the request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    protected function credentials(Request $request)
    {
        $logValue = $request->input($this->username());

        $logKey = filter_var($logValue, FILTER_VALIDATE_EMAIL) ? 'email' : 'alias';

        return [
            $logKey => $logValue,
            'password' => $request->input('password'),
        ];
    }

    public function authenticated(Request $request, $user)
        {

           // dd($user);
        }
  
}
