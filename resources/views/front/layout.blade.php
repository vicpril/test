<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8" />
      <meta
         name="viewport"
         content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content="ISSN (print) 2075—0862 ISSN (online) 2658-350X Индекс Роспечати 37150. ИДЕИ И ИДЕАЛЫ. Н А У Ч Н Ы Й Ж У Р Н А Л. Основан в 2009 году." />
      <meta
         name="author"
         content="Viktor Prilepin"
      />
     <meta name="csrf-token" content="{{ csrf_token() }}">
      <title>@lang('Идеи и Идеалы')</title>

      <link href="{{ asset('css/front.css') }}" rel="stylesheet" />
   </head>
   <body>
      <header class=" blog-header py-3 bg-primary">
         <div class="container">
            <div class="row mx-0 justify-content-between align-items-center ">
               <a class="text-white" href="#">
                  <img class="d-none d-md-block" src="img/logo.svg" alt="" />
                  <img class="d-md-none" src="img/mobile-logo.svg" alt="" />
               </a>

               <div class=" dropdown form-inline">
                  <span class="text-white">@lang('Язык сайта'): </span>
                  <a
                     class="nav-link dropdown-toggle text-white "
                     href="#"
                     role="button"
                     data-toggle="dropdown"
                     aria-haspopup="true"
                     aria-expanded="false"
                  >
                  
                  @if( Config::get('app.locale') == "ru" )
                     <i class="flag-icon flag-icon-ru mr-1"></i>Русский
                  @else
                     <i class="flag-icon flag-icon-us mr-1"></i>English
                  @endif
                  </a>
                  <div class="dropdown-menu">
                     @foreach(LaravelLocalization::getSupportedLocales() as $localeCode => $properties)
                        <a rel="alternate" class="dropdown-item" hreflang="{{ $localeCode }}" href="{{ LaravelLocalization::getLocalizedURL($localeCode, null, [], true) }}">
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
               <div class="page-title">{!! $title !!}</div>
            </div>
         </div>
      </div>

      <main role="main" class="container">
         <div class="row">
            <div class="col-md-9 blog-main">
               <div class="card ">
                  @if(isset($subtitle))
                  <div class="card-header ">
                     <h2 class="my-1 px-2">
                        {!! $subtitle !!}
                     </h2>
                  </div>
                  @endif
                  <div class="card-body mx-2">
                     
                  </div>
                  @if(isset($contentFooter))
                  <div class="card-footer mx-2 d-flex justify-content-between">
                     {!! $contentFooter !!}
                  </div>
                  @endif
               </div>
            </div>
            <!-- /.blog-main -->

            <aside class="col-md-3 blog-sidebar">
              
                    @yield('review_menu')
               
                    @yield('sidebar_menu')
              
               <div class="card mb-3">
                  <div class="card-body">
                     <ul class="list-unstyled mb-0">
                        <li>
                           <a href="{{ route('authors') }}">@lang('Поиск по авторам')</a>
                        </li>
                        <li>
                           <span class="text-uppercase">@lang("Предметный указатель")</span>
                           <ul>
                              @foreach($tags as $tag)
                                 <li>
                                    <a href="{{ route('tags.show', $tag->alias) }}">{{ $tag->loc }}</a>
                                 </li>
                              @endforeach
                           </ul>
                        </li>
                        <li>
                           <span class="text-uppercase">@lang('Поиск по ключевым словам')</span>
                           <form action="{{ route('search') }}" method="GET">
                              <div class="form-group">
                                 <input type="text" class="form-control my-1" name="s" required>
                                 <button type="submit" class="btn btn-light">@lang('Поиск')</button>
                              </div>
                           </form>
                        </li>
                     </ul>
                  </div>
               </div>

               <div class="card mb-3">
                  <div class="card-header">
                     <h5 class="font-italic mb-0">Archives</h5>
                  </div>
                  <div class="card-body">
                     <ol class="list-unstyled mb-0">
                        <li><a href="#">March 2014</a></li>
                        <li><a href="#">February 2014</a></li>
                        <li><a href="#">January 2014</a></li>
                        <li><a href="#">December 2013</a></li>
                        <li><a href="#">November 2013</a></li>
                        <li><a href="#">October 2013</a></li>
                        <li><a href="#">September 2013</a></li>
                        <li><a href="#">August 2013</a></li>
                        <li><a href="#">July 2013</a></li>
                        <li><a href="#">June 2013</a></li>
                        <li><a href="#">May 2013</a></li>
                        <li><a href="#">April 2013</a></li>
                     </ol>
                  </div>
               </div>

               <div class="card">
                  <div class="card-header bg-white">
                     <h5 class="font-italic mb-0">Browse by subject</h5>
                  </div>
                  <div class="card-body">
                     <ul class="list-unstyled">
                        <li
                           class=" d-flex justify-content-between align-items-center"
                        >
                           Cras justo odio
                           <span class="badge badge-primary badge-pill"
                              >14</span
                           >
                        </li>
                        <li
                           class=" d-flex justify-content-between align-items-center"
                        >
                           Dapibus ac facilisis in
                           <span class="badge badge-primary badge-pill">2</span>
                        </li>
                        <li
                           class=" d-flex justify-content-between align-items-center"
                        >
                           Morbi leo risus
                           <span class="badge badge-primary badge-pill">1</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </aside>
            <!-- /.blog-sidebar -->
         </div>
         <!-- /.row -->
      </main>
      <!-- /.container -->

      <footer class="py-3 mt-3 d-flex justify-content-center">
         <small class="text-white"
            >Powered by <a href="#" class="desiner">Viktor Prilepin</a></small
         >
      </footer>
   </body>
   <script src="{{ asset('js/front.js') }}"></script>
   <script src="{{ asset('js/manifest.js') }}"></script>
   <script src="{{ asset('js/vendor.js') }}"></script>
</html>
