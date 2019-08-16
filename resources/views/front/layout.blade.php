<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="utf-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
   <meta name="description"
      content="ISSN (print) 2075—0862 ISSN (online) 2658-350X Индекс Роспечати 37150. ИДЕИ И ИДЕАЛЫ. Н А У Ч Н Ы Й Ж У Р Н А Л. Основан в 2009 году." />
   <meta name="author" content="Viktor Prilepin" />
   <meta name="csrf-token" content="{{ csrf_token() }}">
   <title>
      @lang('Идеи и Идеалы')
   </title>

   <link href="{{ asset('css/front.css') }}" rel="stylesheet" />
</head>

<body>
   <div class="primary-overlay">

  
   <header class=" blog-header py-3 bg-primary">
      <div class="container">
         <div class="row mx-0 justify-content-between align-items-center ">
            <a class="text-white" href="#">
               <img class="d-none d-md-block" src="img/logo.svg" alt="" />
               <img class="d-md-none" src="img/mobile-logo.svg" alt="" />
            </a>

            <div class=" dropdown form-inline">
               <span class="text-white">@lang('Язык сайта'): </span>
               <a class="nav-link dropdown-toggle text-white " href="#" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">

                  @if( Config::get('app.locale') == "ru" )
                  <i class="flag-icon flag-icon-ru mr-1"></i>Русский
                  @else
                  <i class="flag-icon flag-icon-us mr-1"></i>English
                  @endif
               </a>
               <div class="dropdown-menu">
                  @foreach(LaravelLocalization::getSupportedLocales() as $localeCode => $properties)
                  <a rel="alternate" class="dropdown-item" hreflang="{{ $localeCode }}"
                     href="{{ LaravelLocalization::getLocalizedURL($localeCode, null, [], true) }}">
                     <i class="flag-icon flag-icon-{{ $properties['flag'] }} mr-1"></i>@lang($properties['title'])
                  </a>

                  @if(!$loop->last)
                  <div class="dropdown-divider"></div>
                  @endif
                  @endforeach
               </div>
            </div>
         </div>
      </div>
   </header>

   <div class="nav-scroller py-1 mb-2 bg-white shadow">
      <div class="container">

         @yield('navigation')

      </div>
   </div>

   <div class="page-header-section">
      <div class="container">
         <div class="row col-md-12">
            <div class="page-title">@yield('title')</div>
         </div>
      </div>
   </div>

   <main role="main" class="container">
      <div class="row">
         <div class="col-md-9 blog-main mb-3">
            <div class="card ">
               @hasSection('subtitle')
               <div class="card-header ">
                  @yield('breadcrumbs')
                  <h2 class="my-1 px-2">
                     @yield('subtitle')
                  </h2>
               </div>
               @endif
               <div class="card-body mx-2">
                  @yield('content')
               </div>
               @hasSection('contentFooter')
               <div class="card-footer ">
                  @yield('contentFooter')
               </div>
               @endif
            </div>
         </div>
         <!-- /.blog-main -->

         <aside class="col-md-3 blog-sidebar">
            @yield('stol_menu')

            @yield('review_menu')

            @yield('sidebar_menu')

            <div class="card mb-3">
               <div class="card-body">
                     <div class="mb-3">
                        <a class="text-uppercase" href="{{ route('authors.index') }}">@lang('Поиск по авторам')</a>
                     </div>
                     <div class="mb-3">
                        <span class="text-uppercase">@lang("Предметный указатель")</span>
                        <ul>
                           @foreach($tags as $tag)
                           <li>
                              <a href="{{ route('tags.show', $tag->alias) }}">{{ $tag->loc }}</a>
                              <span class="badge badge-secondary badge-pill">{{ count($tag->articles) }}</span>
                           </li>
                           @endforeach
                        </ul>
                     </div>
                     <div>
                        <span class="text-uppercase">@lang('Поиск по ключевым словам')</span>
                        <form action="{{ route('search') }}" method="GET">
                           <div class="form-group">
                              <input type="text" class="form-control my-1 mb-2" name="search" required />
                              <button type="submit" class="btn btn-outline-secondary">
                                 @lang('Поиск')
                              </button>
                           </div>
                        </form>
                     </div>
               </div>
            </div>

         </aside>
         <!-- /.blog-sidebar -->
      </div>
      <!-- /.row -->
   </main>
   <!-- /.container -->
   </div>

   <footer class="py-3 d-flex justify-content-center">
      <small class="text-white">@lang('Разработал') <a href="#" class="desiner">@lang('Виктор Прилепин')</a></small>
   </footer>
</body>
<script src="{{ asset('js/front.js') }}"></script>
<script src="{{ asset('js/manifest.js') }}"></script>
<script src="{{ asset('js/vendor.js') }}"></script>

@stack('scripts')

</html>