<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8" />
      <meta
         name="viewport"
         content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content="" />
      <meta
         name="author"
         content="Mark Otto, Jacob Thornton, and Bootstrap contributors"
      />
      <meta name="generator" content="Jekyll v3.8.5" />
      <title>@lang('Идеи и Идеалы')</title>

      <link
         rel="canonical"
         href="https://getbootstrap.com/docs/4.3/examples/blog/"
      />

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
            <nav class="nav navbar-light navbar-expand-md  ">
               <div
                  class="navbar-toggler text-dark px-0"
                  data-toggle="collapse"
                  data-target="#navbarMenu"
                  aria-controls="navbarMenu"
                  aria-expanded="false"
                  aria-label="Site menu"
               >
                  <span class="h6">Site menu</span>
                  <span class="navbar-toggler-icon icon-dark"></span>
               </div>
               <div class="collapse navbar-collapse" id="navbarMenu">
                  <ul class="navbar-nav mr-auto mt-0 py-1">
                     <li class="p-2 p-md-0">
                        <a class=" m-0 p-2 text-dark" href="#">World</a>
                     </li>
                     <li class="p-2 p-md-0">
                        <a class=" m-0 p-2 text-dark" href="#">U.S.</a>
                     </li>
                     <li class="p-2 p-md-0">
                        <a class=" m-0 p-2 text-dark" href="#">Technology</a>
                     </li>
                     <li class="p-2 p-md-0">
                        <a class=" m-0 p-2 text-dark" href="#">Design</a>
                     </li>
                     <li class="p-2 p-md-0">
                        <a class=" m-0 p-2 text-dark" href="#">Culture</a>
                     </li>
                     <li class="p-2 p-md-0">
                        <a class=" m-0 p-2 text-dark" href="#">Business</a>
                     </li>
                     <li class="p-2 p-md-0">
                        <a class=" m-0 p-2 text-dark" href="#">Politics</a>
                     </li>
                     <li class="p-2 p-md-0">
                        <a class=" m-0 p-2 text-dark" href="#">Opinion</a>
                     </li>
                     <li class="p-2 p-md-0">
                        <a class=" m-0 p-2 text-dark" href="#">Science</a>
                     </li>
                     <li class="p-2 p-md-0">
                        <a class=" m-0 p-2 text-dark" href="#">Health</a>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
      </div>

      <div class="page-header-section">
         <div class="container">
            <div class="row col-md-12">
               <div class="page-title">Royal society open science</div>
            </div>
         </div>
      </div>

      <main role="main" class="container">
         <div class="row">
            <div class="col-md-9 blog-main">
               <div class="card ">
                  <div class="card-header ">
                     <h2 class="my-1 px-2">
                        Table of Contents
                     </h2>
                  </div>
                  <div class="card-body mx-2">
                     <section>
                        <h3 class="category-title mb-4">
                           Biochemistry and biophysics
                        </h3>

                        <article class="ml-4">
                           <h5 class="article-title">
                              Dynamical modelling of secondary metabolism and
                              metabolic switches in Streptomyces xiamenensis 318
                           </h5>
                           <ul
                              class="authors mb-2 list-unstyled list-group list-group-horizontal"
                           >
                              <li>
                                 <a href="#">Тимошенко Г.А.</a
                                 ><span>,&ensp;</span>
                              </li>

                              <li><a href="#">Сидорова Т.А.</a></li>
                           </ul>
                           <div class="doi py-1">
                              <span><strong>DOI: </strong></span>
                              10.17212/2075-0862-2019-11.2.1-44-62
                           </div>
                           <div class="links my-2 d-flex">
                              <a
                                 class=""
                                 data-toggle="collapse"
                                 href="#annotation"
                                 aria-expanded="false"
                                 aria-controls="annotation"
                                 ><i
                                    class="fa fa-toggle-off"
                                    aria-hidden="true"
                                 ></i>
                                 Annotation
                              </a>

                              <ul
                                 class="ml-auto list-unstyled list-group list-group-horizontal"
                              >
                                 <li><a href="#">Text</a></li>
                                 <li><a href="#">PDF</a></li>
                                 <li><a href="#">Audio version</a></li>
                              </ul>
                           </div>
                           <div class="collapse annotation" id="annotation">
                              <div class="article-section article-udk">
                                 <span><strong>UDK: </strong></span>378.4
                              </div>

                              <div class="article-section article-annotation">
                                 <span><strong>Annotation: </strong></span>
                                 <p class="mb-0">
                                    Anim pariatur cliche reprehenderit, enim
                                    eiusmod high life accusamus terry richardson
                                    ad squid. Nihil anim keffiyeh helvetica,
                                    craft beer labore wes anderson cred nesciunt
                                    sapiente ea proident.
                                 </p>
                              </div>

                              <div class="article-section article-keywords">
                                 <span><strong>Keywords: </strong></span>
                                 Модернизация высшего образования, университет
                                 мирового уровня, Республика Корея
                              </div>
                           </div>
                        </article>
                        <article class="ml-4">
                           <h5 class="article-title">
                              Dynamical modelling of secondary metabolism and
                              metabolic switches in Streptomyces xiamenensis 318
                           </h5>
                           <ul
                              class="authors mb-2 list-unstyled list-group list-group-horizontal"
                           >
                              <li>
                                 <a href="#">Тимошенко Г.А.</a
                                 ><span>,&ensp;</span>
                              </li>

                              <li><a href="#">Сидорова Т.А.</a></li>
                           </ul>
                           <div class="doi py-1">
                              <span><strong>DOI: </strong></span>
                              10.17212/2075-0862-2019-11.2.1-44-62
                           </div>
                           <div class="links my-2 d-flex">
                              <a
                                 class=""
                                 data-toggle="collapse"
                                 href="#annotation"
                                 aria-expanded="false"
                                 aria-controls="annotation"
                                 ><i
                                    class="fa fa-toggle-off"
                                    aria-hidden="true"
                                 ></i>
                                 Annotation
                              </a>

                              <ul
                                 class="ml-auto list-unstyled list-group list-group-horizontal"
                              >
                                 <li><a href="#">Text</a></li>
                                 <li><a href="#">PDF</a></li>
                                 <li><a href="#">Audio version</a></li>
                              </ul>
                           </div>
                           <div class="collapse annotation" id="annotation">
                              <div class="article-section article-udk">
                                 <span><strong>UDK: </strong></span>378.4
                              </div>

                              <div class="article-section article-annotation">
                                 <span><strong>Annotation: </strong></span>
                                 <p class="mb-0">
                                    Anim pariatur cliche reprehenderit, enim
                                    eiusmod high life accusamus terry richardson
                                    ad squid. Nihil anim keffiyeh helvetica,
                                    craft beer labore wes anderson cred nesciunt
                                    sapiente ea proident.
                                 </p>
                              </div>

                              <div class="article-section article-keywords">
                                 <span><strong>Keywords: </strong></span>
                                 Модернизация высшего образования, университет
                                 мирового уровня, Республика Корея
                              </div>
                           </div>
                        </article>
                     </section>
                     <section>
                        <h3 class="category-title mb-4">
                           Biochemistry and biophysics
                        </h3>

                        <article class="ml-4">
                           <h5 class="article-title">
                              Dynamical modelling of secondary metabolism and
                              metabolic switches in Streptomyces xiamenensis 318
                           </h5>
                           <ul
                              class="authors mb-2 list-unstyled list-group list-group-horizontal"
                           >
                              <li>
                                 <a href="#">Тимошенко Г.А.</a
                                 ><span>,&ensp;</span>
                              </li>

                              <li><a href="#">Сидорова Т.А.</a></li>
                           </ul>
                           <div class="doi py-1">
                              <span><strong>DOI: </strong></span>
                              10.17212/2075-0862-2019-11.2.1-44-62
                           </div>
                           <div class="links my-2 d-flex">
                              <a
                                 class=""
                                 data-toggle="collapse"
                                 href="#annotation"
                                 aria-expanded="false"
                                 aria-controls="annotation"
                                 ><i
                                    class="fa fa-toggle-off"
                                    aria-hidden="true"
                                 ></i>
                                 Annotation
                              </a>

                              <ul
                                 class="ml-auto list-unstyled list-group list-group-horizontal"
                              >
                                 <li><a href="#">Text</a></li>
                                 <li><a href="#">PDF</a></li>
                                 <li><a href="#">Audio version</a></li>
                              </ul>
                           </div>
                           <div class="collapse annotation" id="annotation">
                              <div class="article-section article-udk">
                                 <span><strong>UDK: </strong></span>378.4
                              </div>

                              <div class="article-section article-annotation">
                                 <span><strong>Annotation: </strong></span>
                                 <p class="mb-0">
                                    Anim pariatur cliche reprehenderit, enim
                                    eiusmod high life accusamus terry richardson
                                    ad squid. Nihil anim keffiyeh helvetica,
                                    craft beer labore wes anderson cred nesciunt
                                    sapiente ea proident.
                                 </p>
                              </div>

                              <div class="article-section article-keywords">
                                 <span><strong>Keywords: </strong></span>
                                 Модернизация высшего образования, университет
                                 мирового уровня, Республика Корея
                              </div>
                           </div>
                        </article>
                        <article class="ml-4">
                           <h5 class="article-title">
                              Dynamical modelling of secondary metabolism and
                              metabolic switches in Streptomyces xiamenensis 318
                           </h5>
                           <ul
                              class="authors mb-2 list-unstyled list-group list-group-horizontal"
                           >
                              <li>
                                 <a href="#">Тимошенко Г.А.</a
                                 ><span>,&ensp;</span>
                              </li>

                              <li><a href="#">Сидорова Т.А.</a></li>
                           </ul>
                           <div class="doi py-1">
                              <span><strong>DOI: </strong></span>
                              10.17212/2075-0862-2019-11.2.1-44-62
                           </div>
                           <div class="links my-2 d-flex">
                              <a
                                 class=""
                                 data-toggle="collapse"
                                 href="#annotation"
                                 aria-expanded="false"
                                 aria-controls="annotation"
                                 ><i
                                    class="fa fa-toggle-off"
                                    aria-hidden="true"
                                 ></i>
                                 Annotation
                              </a>

                              <ul
                                 class="ml-auto list-unstyled list-group list-group-horizontal"
                              >
                                 <li><a href="#">Text</a></li>
                                 <li><a href="#">PDF</a></li>
                                 <li><a href="#">Audio version</a></li>
                              </ul>
                           </div>
                           <div class="collapse annotation" id="annotation">
                              <div class="article-section article-udk">
                                 <span><strong>UDK: </strong></span>378.4
                              </div>

                              <div class="article-section article-annotation">
                                 <span><strong>Annotation: </strong></span>
                                 <p class="mb-0">
                                    Anim pariatur cliche reprehenderit, enim
                                    eiusmod high life accusamus terry richardson
                                    ad squid. Nihil anim keffiyeh helvetica,
                                    craft beer labore wes anderson cred nesciunt
                                    sapiente ea proident.
                                 </p>
                              </div>

                              <div class="article-section article-keywords">
                                 <span><strong>Keywords: </strong></span>
                                 Модернизация высшего образования, университет
                                 мирового уровня, Республика Корея
                              </div>
                           </div>
                        </article>
                     </section>
                  </div>
                  <div class="card-footer mx-2 d-flex justify-content-between">
                     <a href="#" class="btn btn-primary">
                        Previous Issue
                     </a>
                     <a href="#" class="btn btn-link">
                        <strong>Back to top</strong>
                     </a>
                     <a href="#" class="btn btn-primary">
                        Next Issue
                     </a>
                  </div>
               </div>
            </div>
            <!-- /.blog-main -->

            <aside class="col-md-3 blog-sidebar">
               <div class="card mb-3">
                  <div class="card-header">
                     <h5 class="font-italic mb-0">About</h5>
                  </div>
                  <div class="card-body">
                     <p class="mb-0">
                        Etiam porta <em>sem malesuada magna</em> mollis euismod.
                        Cras mattis consectetur purus sit amet fermentum. Aenean
                        lacinia bibendum nulla sed consectetur.
                     </p>
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
