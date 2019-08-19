<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="utf-8" />
   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
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
   <link href="{{ asset('css/back.css') }}" rel="stylesheet" />
   @stack('css')
   <!-- <link href="vendors/pace-progress/css/pace.min.css" rel="stylesheet"> -->
</head>

<body class="app header-fixed">
   <div id="app" class="primary-overlay">

      
      <!-- Content-->
   <!-- <div class="content mt-4"> -->
   <div class="container-fluid mt-5">
      <div class="animated fadeIn">
         <!-- <div class="container"> -->
            <div class="row justify-content-center">
               <div class="col-xs-9 col-md-5 col-lg-4">
                  <!-- CONTENT -->
                  @yield('content')
                  <!-- end content -->
                  
                  
               </div>
            </div>
            <!-- </div> -->
         </div>
      </div>
   </div>
   <!-- </div> -->
   </div>

   <!-- <script src="js/main.js"></script> -->

   <script src="{{ asset('js/manifest.js') }}"></script>
   <script src="{{ asset('js/vendor.js') }}"></script>
   @stack('lib')
   <script src="{{ asset('js/back.js') }}"></script>
   @stack('js')


</body>

</html>