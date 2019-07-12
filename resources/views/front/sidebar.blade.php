@yield('stol_menu') 

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
                  <a
                     href="{{ route('tags.show', $tag->alias) }}"
                     >{{ $tag->loc }}</a
                  >
               </li>
               @endforeach
            </ul>
         </li>
         <li>
            <span class="text-uppercase"
               >@lang('Поиск по ключевым словам')</span
            >
            <form action="{{ route('search') }}" method="GET">
               <div class="form-group">
                  <input
                     type="text"
                     class="form-control my-1"
                     name="s"
                     required
                  />
                  <button type="submit" class="btn btn-light">
                     @lang('Поиск')
                  </button>
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
         <li class=" d-flex justify-content-between align-items-center">
            Cras justo odio
            <span class="badge badge-primary badge-pill">14</span>
         </li>
         <li class=" d-flex justify-content-between align-items-center">
            Dapibus ac facilisis in
            <span class="badge badge-primary badge-pill">2</span>
         </li>
         <li class=" d-flex justify-content-between align-items-center">
            Morbi leo risus
            <span class="badge badge-primary badge-pill">1</span>
         </li>
      </ul>
   </div>
</div>
