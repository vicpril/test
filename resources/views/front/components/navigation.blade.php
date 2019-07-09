<nav class="nav navbar-light navbar-expand-md  ">
     <div
        class="navbar-toggler text-dark px-0"
        data-toggle="collapse"
        data-target="#navbarMenu"
        aria-controls="navbarMenu"
        aria-expanded="false"
        aria-label="Site menu"
     >
        <span class="h6">@lang('Меню сайта')</span>
        <span class="navbar-toggler-icon icon-dark"></span>
     </div>
     <div class="collapse navbar-collapse" id="navbarMenu">
        <ul class="navbar-nav mr-auto mt-0 py-1">

              @include('front.components.customMenuItems',['items'=>$menu->roots()])

        </ul>
     </div>
</nav>