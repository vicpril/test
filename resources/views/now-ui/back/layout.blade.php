<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  {{--
  <link rel="icon" type="image/png" href="../assets/img/favicon.png"> --}}
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>
    {{ $title }}
    @if(isset($subtitle))
      | {{ $subtitle }}
    @endif
  </title>
  <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
  <!--     Fonts and icons     -->
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
  <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
  <!-- CSS Files -->
  <link href="{{ asset('css/now-ui-dashboard.css') }}" rel="stylesheet">
  <!-- CSS Just for demo purpose, don't include it in your project -->
 
  @yield('css')


</head>

<body class="user-profile">
  <div class="wrapper" id="app">

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
        @yield('content')
      <!-- end content -->
      
      <!-- FOOTER -->
        @yield('footer')
      <!-- end footer -->

    </div>
  </div>

  <!-- MODALS -->
  @yield('modals')
  <!-- end modals -->

  <!--   Core JS Files   -->
<!--   <script src="{{ asset('js/now-ui-dashboard.back.js') }}" type="text/javascript"></script> -->
  <script src="{{ mix('js/manifest.js') }}"></script>
  <script src="{{ mix('js/vendor.js') }}"></script>
  <script src="{{ mix('js/now-ui-dashboard.back.js') }}"></script>

  <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" type="text/javascript"></script> -->
  <!--  Google Maps Plugin    -->
  <!-- <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script> -->
  
  <!--  Notifications Plugin    -->
  <!-- <script src="../assets/js/plugins/bootstrap-notify.js"></script> -->
  <!-- Control Center for Now Ui Dashboard: parallax effects, scripts for the example pages etc -->
  <!-- <script src="../assets/js/now-ui-dashboard.min.js?v=1.2.0" type="text/javascript"></script> -->

  @yield('js')

</body>

</html>