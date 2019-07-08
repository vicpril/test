      <!doctype html>
      <html lang="en">
      <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
       <meta name="description" content="">
       <meta name="author" content="">
       <meta name="csrf-token" content="{{ csrf_token() }}">
       <link rel="icon" href="/images/favicon.ico">

       <title>Идеи и Идеалы</title>

       <!-- Bootstrap core CSS -->
<!--        <link href="{{ asset(env('THEME')) }}/dist/css/bootstrap.min.css" rel="stylesheet"> -->

       <!-- Custom styles for this template -->
<!--        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700,900" rel="stylesheet"> -->
       <link href="/css/app.css" rel="stylesheet">
<!--        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous"> -->
    </head>

    <body>

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

     <ul>
       @foreach(LaravelLocalization::getSupportedLocales() as $localeCode => $properties)
       <li>
         <a rel="alternate" hreflang="{{ $localeCode }}" href="{{ LaravelLocalization::getLocalizedURL($localeCode, null, [], true) }}">
          {{ $properties['native'] }}
       </a>
    </li>
    @endforeach
   </ul>

   </header>

   <!-- END TITLE -->

   <!-- NAVIGATION horizontal -->
   <div class="navigation">
      {!! $navigation !!}
   </div>
          <!-- END NAVIGATION horizontal -->