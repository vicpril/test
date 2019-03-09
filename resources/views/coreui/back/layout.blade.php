<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
         name="viewport"
         content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <meta name="keyword" content="" />
      <meta name="csrf-token" content="{{ csrf_token() }}" />
      <title>
         {{ $title }}
         @if(isset($subtitle)) | {{ $subtitle }}
         @endif
      </title>
      <!-- Icons-->
      <link href="{{ asset('css/coreui.css') }}" rel="stylesheet" />
      <!-- <link href="vendors/pace-progress/css/pace.min.css" rel="stylesheet"> -->
   </head>

   <body
      class="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show"
      
   >
      <!-- Navbar -->
      @yield('navbar')
      <!-- End Navbar -->

      <div class="app-body" id="app">
         <div class="sidebar">
            <!-- SIDEBAR -->
            @yield('sidebar')
            <!-- end sidebar -->
         </div>

         <main class="main">
          <!-- Breadcrumb-->
          {{-- @include(env('THEME_BACK').'.back.breadcrumb') --}}

            <!-- Content-->
            <!-- <div class="content mt-4"> -->
               <div class="container-fluid mt-4">
                  <div class="animated fadeIn">
                     <!-- CONTENT -->
                     @yield('content')
                     <!-- end content -->
                  </div>
               </div>
            <!-- </div> -->
         </main>
      </div>
      <!-- FOOTER -->
      @yield('footer')
      <!-- end footer -->

      <!-- CoreUI and necessary plugins-->
      <!-- <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="node_modules/pace-progress/pace.min.js"></script>
    <script src="node_modules/perfect-scrollbar/dist/perfect-scrollbar.min.js"></script>
    <script src="node_modules/@coreui/coreui/dist/js/coreui.min.js"></script> -->
      <!-- Plugins and scripts required by this view-->
      <!-- <script src="node_modules/chart.js/dist/Chart.min.js"></script>
    <script src="node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/js/custom-tooltips.min.js"></script>
    <script src="js/main.js"></script> -->

      <!-- MODALS -->
      @yield('modals')
      <!-- end modals -->

      <script src="{{ mix('js/manifest.js') }}"></script>
      <script src="{{ mix('js/vendor.js') }}"></script>
      <script src="{{ mix('js/coreui.js') }}"></script>

      @yield('js')
   </body>
</html>
