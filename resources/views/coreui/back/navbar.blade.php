<header class="app-header navbar">
   <button
      class="navbar-toggler sidebar-toggler d-lg-none mr-auto"
      type="button"
      data-toggle="sidebar-show"
   >
      <span class="navbar-toggler-icon"></span>
   </button>
   <div class="site-title d-flex justify-content-center">
      <a class="navbar-brand" href="{{ route('home') }}">
         <i class="fa fa-university mr-1"></i>
         <span class="">Идеи и Идеалы</span>
      </a>
   </div>

   <button
      class="navbar-toggler sidebar-toggler d-md-down-none"
      type="button"
      data-toggle="sidebar-lg-show"
   >
      <span class="navbar-toggler-icon"></span>
   </button>
   <ul class="nav navbar-nav d-md-down-none">
      <li class="nav-item dropdown px-3">
         <a
            class="nav-link"
            data-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
         >
            <i class="fa fa-plus fa-lg"></i> Добавить</a
         >
         <div class="dropdown-menu dropdown-menu-right">
            <div class="dropdown-header text-center">
               <strong>Материал</strong>
            </div>
            <a class="dropdown-item text-danger" href="#">
               <i class="fa fa-book"></i> Выпуск</a
            >
            <a class="dropdown-item text-danger" href="#">
               <i class="fa fa-file"></i> Статью</a
            >
            <a class="dropdown-item" href="{{ route('categories.index') }}">
               <i class="fa fa-bookmark"></i> Рубрику</a
            >
            <a class="dropdown-item" href="{{ route('tags.index') }}">
               <i class="fa fa-thumb-tack "></i> Метку</a
            >
            <div class="dropdown-header text-center">
               <strong>Авторы</strong>
            </div>
            <a class="dropdown-item text-danger" href="#">
               <i class="fa fa-building"></i> Место работы</a
            >
            <a class="dropdown-item" href="{{ route('users.create') }}">
               <i class="fa fa-address-book"></i> Автора</a
            >
         </div>
      </li>
   </ul>

   <ul class="nav navbar-nav ml-auto">
      <li class="nav-item dropdown mr-2">
         <a
            class="nav-link"
            data-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
         >
            <span class="	d-none d-lg-inline-block">Привет, {{ Auth::user()->ru->full_name }}</span>
            <i class="icon-user icons"></i>
         </a>
         <div class="dropdown-menu dropdown-menu-right">
            <div class="dropdown-header text-center">
               <strong>Account</strong>
            </div>
            <a class="dropdown-item" href="{{ route('users.edit', Auth::user()->id) }}">
               <i class="fa fa-user"></i> Страница пользователя</a
            >

            <div class="dropdown-divider"></div>

            <a class="dropdown-item" href="{{ route('logout') }}">
               <i class="fa fa-sign-out"></i> Выйти</a
            >
         </div>
      </li>
   </ul>
</header>
