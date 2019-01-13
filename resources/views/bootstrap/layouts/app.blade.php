        <!doctype html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <meta name="description" content="">
          <meta name="author" content="">
          <link rel="icon" href="/images/favicon.ico">

          <title>Идеи и Идеалы | Вход</title>

          <!-- Bootstrap core CSS -->
          <link href="{{ asset(env('THEME')) }}/dist/css/bootstrap.min.css" rel="stylesheet">

          <!-- Custom styles for this template -->
          <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700,900" rel="stylesheet">
          <link href="/css/bootstrap.css" rel="stylesheet">
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
        </head>

        <body>
        <div class="app">
          <div class="container">

            <!-- TITLE -->
            <header class="blog-header py-3">
              <div class="row flex-nowrap justify-content-between align-items-center">
                <div class="col-4 pt-1">

                </div>
                <div class="col-4 text-center">
                  <h1><a class="blog-header-logo text-dark" href="{{ url('/') }}">Идеи и Идеалы</a></h1>
                </div>
                <div class="col-4 d-flex justify-content-end align-items-center">

                </div>
              </div>
              <div class="row flex-nowrap justify-content-between align-items-center">
                <div class="col-4 text-center"></div>
                <div class="col-4 text-center">
                  <span>Научный журнал</span>
                </div>
                <div class="col-4 text-center"></div>
              </div>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <!-- Left Side Of Navbar -->
                            <ul class="navbar-nav mr-auto">

                            </ul>

                            <!-- Right Side Of Navbar -->
                            <ul class="navbar-nav ml-auto">
                                <!-- Authentication Links -->
                                @guest
                                    <li class="nav-item">
                                        <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">{{ __('Register') }}</a>
                                    </li>
                                @else
                                    <li class="nav-item dropdown">
                                        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                            {{ Auth::user()->name }} <span class="caret"></span>
                                        </a>

                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="{{ route('logout') }}"
                                               onclick="event.preventDefault();
                                                             document.getElementById('logout-form').submit();">
                                                {{ __('Logout') }}
                                            </a>

                                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                                @csrf
                                            </form>
                                        </div>
                                    </li>
                                @endguest
                            </ul>
                        </div>
                    <!-- </div> -->
                <!-- </nav> -->

                <main class="py-4">
                    @yield('content')
                </main>
            </div>
        </body>
        </html>
