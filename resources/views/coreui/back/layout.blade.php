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

		 	@if(Auth::user()->api_token)<meta name="api-token" content="{{ Auth::user()->api_token }}" />@endif

      <title>
         {{ $title }}
         @if(isset($subtitle)) | {{ $subtitle }}
         @endif
      </title>
      <!-- Icons-->
      <link href="{{ asset('css/back/coreui.css') }}" rel="stylesheet" />
      @stack('css')
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
					<!-- Notification -->
							<alert
					@if(Session::get('message'))
								 :message="{{ json_encode(Session::get('message'), JSON_FORCE_OBJECT) }}"
					@endif
               ></alert>

         <main class="main">

          <!-- Breadcrumb-->
          {{-- @include(env('THEME_BACK').'.back.breadcrumb') --}}

            <!-- Content-->
            <!-- <div class="content mt-4"> -->
               <div class="container-fluid mt-4">
                  <div class="animated fadeIn">
                    <!-- Alert -->
										{{--
										@if (count($errors) > 0)
												@alert(['type'=>'danger'])
													@foreach ($errors->all() as $error)
															<p><i class="icon fa fa-check"></i> {{ $error }}</p>
													@endforeach
												@endalert
										@endif

										@if (session('status'))
												<div class="alert alert-success" role="alert">
														{{ session('status') }}
												</div>
										@endif

										@if (session('error'))
												<div class="alert alert-danger" role="alert">
														{{ session('error') }}
												</div>
										@endif

										--}}


                     <!-- CONTENT -->
                     @yield('content')
                     <!-- end content -->


                  </div>
               </div>
            <!-- </div> -->
         </main>
         <scroll-up-button></scroll-up-button>
      </div>
      <!-- FOOTER -->
      @yield('footer')
      <!-- end footer -->

      <!-- MODALS -->
      @yield('modals')
      <!-- end modals -->

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

      <script src="{{ mix('js/back/manifest.js') }}"></script>
      <script src="{{ mix('js/back/vendor.js') }}"></script>
  @stack('lib')
      <script src="{{ mix('js/back/back.js') }}"></script>
  @stack('js')


   </body>
</html>
