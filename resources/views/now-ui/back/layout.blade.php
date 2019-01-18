<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  {{--
  <link rel="icon" type="image/png" href="../assets/img/favicon.png"> --}}
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <title>
    Now UI Dashboard by Creative Tim
  </title>
  <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
  <!--     Fonts and icons     -->
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
  <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
  <!-- CSS Files -->
  <link href="{{ asset('css/now-ui-back.css') }}" rel="stylesheet">
  <!-- CSS Just for demo purpose, don't include it in your project -->
  
  @yield('css')


</head>

<body class="user-profile">
  <div class="wrapper ">

    <!-- SIDEBAR -->
    @yield('sidebar')
    <!-- end sidebar -->

    <div class="main-panel">
      <!-- Navbar -->
      @yield('navbar')
      <!-- End Navbar -->
      
      <div class="panel-header panel-header-sm">
      </div>

      <!-- CONTENT -->
        @include(env('THEME_BACK').'.back.content')
        {{-- @yield('content') --}}
      <!-- end content -->
      
      <!-- FOOTER -->
        @yield('footer')
      <!-- end footer -->

    </div>
  </div>

  <!-- MODALS -->
  @yield('modals')
  <!-- end modals -->

  </div>
  <!--   Core JS Files   -->
  <script src="{{ asset('js/now-ui-back.js') }}"></script>
  <!--  Google Maps Plugin    -->
  <!-- <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script> -->
  
  <!--  Notifications Plugin    -->


  <!-- <script src="../assets/js/plugins/bootstrap-notify.js"></script> -->
  <!-- Control Center for Now Ui Dashboard: parallax effects, scripts for the example pages etc -->
  <!-- <script src="../assets/js/now-ui-dashboard.min.js?v=1.2.0" type="text/javascript"></script> -->

  @yield('js')

</body>

</html>