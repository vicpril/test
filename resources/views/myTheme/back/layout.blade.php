<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Идеи и Идеалы | Панель администратора </title>

  <!-- Bootstrap core CSS -->

  <!-- Custom styles for this template -->
  <link href="css/back.css" rel="stylesheet"> 
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
    crossorigin="anonymous">
</head>

<body>

  <!-- NAVBAR -->
  <nav class="navbar navbar-light bg-light fixed-top flex-md-nowrap p-1 shadow">
    <a class="navbar-brand bg-light col-sm-3 col-md-2 mr-0" href="{{ route('home') }}">Идеи и Идеалы</a>
<!--     <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"> -->
    <h3 class="text-primary ml-4 mb-0 mr-auto">Университеты</h2>
    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <a class="nav-link" href="#">Sign out</a>
      </li>
    </ul>
  </nav>
  <!-- end navbar -->

  <!-- WRAPPER -->
  <div class="container-fluid">
    <div class="row">

      <!-- SIDEBAR -->
        @include(env('THEME_BACK').'.back.sidebar')
      <!-- end sidebar -->

      <!-- CONTENT -->
      <main role="main" class="col-md-10 ml-sm-auto col-lg-10 px-4 bg-dark">
          @yield('content')
      </main>
      <!-- end content -->

      
    </div>
  </div>
  <!-- end wrapper -->



  <!-- SCRIPTS -->
  {{-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script> --}}
  {{-- <script src="dist/js/bootstrap.bundle.min.js"></script> --}}
  <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
  {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"></script> --}}
  <script src="js/back.js"></script>
</body>

</html>