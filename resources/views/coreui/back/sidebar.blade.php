<nav class="sidebar-nav">
   <ul class="nav">
      <li class="nav-title">Выпуски и статьи</li>
      <li class="nav-item">
         <a class="nav-link" href="{{ route('issues.index') }}">
            <i class="nav-icon icon-book-open"></i> Выпуски</a
         >
         <a class="nav-link" href="{{ route('articles.index') }}">
            <i class="nav-icon icon-docs"></i> Статьи</a
         >
         <a class="nav-link" href="{{ route('categories.index') }}">
            <i class="fa fa-bookmark px-1 mr-2"></i> Рубрики</a
         >
         <a class="nav-link" href="{{ route('tags.index') }}">
            <i class="fa fa-thumb-tack px-1 mr-2"></i> Метки</a
         >
      </li>
      <li class="nav-title">Авторы</li>
      <li class="nav-item">
         <a class="nav-link text-danger" href="colors.html">
            <i class="nav-icon icon-home"></i> Организации</a
         >
         <a class="nav-link" href="{{ route('users.index') }}">
            <i class="nav-icon icon-people"></i> Авторы</a
         >
      </li>

      <li class="divider"></li>
      <li class="nav-title">Настройки</li>
      <li class="nav-item">
         <a class="nav-link text-danger" href="#">
            <i class="nav-icon icon-doc"></i> Страницы</a
         >
         <a class="nav-link text-danger" href="#">
            <i class="nav-icon icon-list"></i> Меню</a
         >
      </li>
      <li class="divider"></li>
      <li class="nav-title">Библиотека</li>
      <li class="nav-item">
         <a class="nav-link" href="{{ url('elfinder') }}" target="_blank">
            <i class="nav-icon icon-folder-alt"></i> Медиафайлы</a
         >
      </li>
     <li class="nav-item">
         <a class="nav-link text-warning" href="{{ route('ckeditor-test') }}">
            <i class="nav-icon icon-folder-alt"></i> Test</a
         >
      </li>
     <li class="nav-item">
         <a class="nav-link" href="https://coreui.io/vue/demo/#/dashboard" target="_blank">
            <i class="nav-icon icon-folder-alt"></i> Demo</a
         >
      </li>
   </ul>
</nav>
<button class="sidebar-minimizer brand-minimizer" type="button"></button>


