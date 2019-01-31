<div class="sidebar" data-color="orange">
    {{-- Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red | yellow" --}}
    <div class="logo">
      <a href="{{ route('home') }}" class="simple-text logo-normal text-center">
        <i class="fas fa-lg fa-university"></i>
        <span class="h6">Идеи и Идеалы</span>
      </a>
    </div>
    <div class="sidebar-wrapper">
      <ul class="nav">

        <li class="@if( Request::url() == route('users.index')) active @endif">
          <a href="{{ route('users.index') }}">
            <i class="now-ui-icons users_single-02"></i>
            <p>Авторы</p>
          </a>
        </li>
        <li>

        <li class="@if( Request::url() == route('jobs.index')) active @endif">
          <a href="{{ route('jobs.index') }}">
            <i class="now-ui-icons business_bank"></i>
            <p>Организации</p>
          </a>
        </li>
        
        <li class="@if( Request::url() == route('files.index')) active @endif">
          <a href="{{ route('files.index') }}">
            <i class="now-ui-icons files_single-copy-04"></i>
            <p>Файлы</p>
          </a>
        </li>
        
        <li class="@if( Request::url() == url('admin')) active @endif">
          <a href="{{ url('admin') }}">
            <i class="now-ui-icons design_app"></i>
            <p>Dashboard</p>
          </a>
        </li>
        <li class="@if( Request::url() == url('admin/icons')) active @endif">
          <a href="{{ url('admin/icons') }}">
            <i class="now-ui-icons education_atom"></i>
            <p>Icons</p>
          </a>
        </li>
        <li>
          <a href="./map.html">
            <i class="now-ui-icons location_map-big"></i>
            <p>Maps</p>
          </a>
        </li>
        <li>
          <a href="./notifications.html">
            <i class="now-ui-icons ui-1_bell-53"></i>
            <p>Notifications</p>
          </a>
        </li>
        <li>
          <a href="./user.html">
            <i class="now-ui-icons users_single-02"></i>
            <p>User Profile</p>
          </a>
        </li>
        <li>
          <a href="./tables.html">
            <i class="now-ui-icons design_bullet-list-67"></i>
            <p>Table List</p>
          </a>
        </li>
        <li>
          <a href="./typography.html">
            <i class="now-ui-icons text_caps-small"></i>
            <p>Typography</p>
          </a>
        </li>
        <li class="active-pro">
          <a href="./upgrade.html">
            <i class="now-ui-icons arrows-1_cloud-download-93"></i>
            <p>Upgrade to PRO</p>
          </a>
        </li>
      </ul>
    </div>
  </div>