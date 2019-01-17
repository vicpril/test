<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  {{--
  <link rel="icon" type="image/png" href="../assets/img/favicon.png"> --}}
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <title>
    Now UI Dashboard by Creative Tim
  </title>
  <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
  <!--     Fonts and icons     -->
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
  <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
  <!-- CSS Files -->
  <link href="css/now-ui-back.css" rel="stylesheet">
  <!-- CSS Just for demo purpose, don't include it in your project -->


  <!-- DataTables CSS -->
  <link rel="stylesheet" type="text/css" href="css/datatables.css">

  <!-- DataTables Responsive CSS -->

</head>

<body class="user-profile">
  <div class="wrapper ">

    <!-- SIDEBAR -->
    <div class="sidebar" data-color="orange">
      <!-- Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red | yellow" -->
      <div class="logo">
        <a href="http://www.creative-tim.com" class="simple-text logo-mini">
          CT
        </a>
        <a href="http://www.creative-tim.com" class="simple-text logo-normal">
          Creative Tim
        </a>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <li>
            <a href="./dashboard.html">
              <i class="now-ui-icons design_app"></i>
              <p>Dashboard</p>
            </a>
          </li>
          <li>
            <a href="./icons.html">
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
          <li class="active ">
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
    <!-- end sidebar -->

    <div class="main-panel">
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg fixed-top navbar-transparent  bg-primary  navbar-absolute">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <div class="navbar-toggle">
              <button type="button" class="navbar-toggler">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <a class="navbar-brand" href="#pablo">User Profile</a>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-bar navbar-kebab"></span>
            <span class="navbar-toggler-bar navbar-kebab"></span>
            <span class="navbar-toggler-bar navbar-kebab"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navigation">
            <form>
              @csrf
              <div class="input-group no-border">
                <input type="text" value="" class="form-control" placeholder="Search...">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <i class="now-ui-icons ui-1_zoom-bold"></i>
                  </div>
                </div>
              </div>
            </form>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#pablo">
                  <i class="now-ui-icons media-2_sound-wave"></i>
                  <p>
                    <span class="d-lg-none d-md-block">Stats</span>
                  </p>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <i class="now-ui-icons location_world"></i>
                  <p>
                    <span class="d-lg-none d-md-block">Some Actions</span>
                  </p>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#pablo">
                  <i class="now-ui-icons users_single-02"></i>
                  <p>
                    <span class="d-lg-none d-md-block">Account</span>
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- End Navbar -->
      
      <div class="panel-header panel-header-sm">
      </div>

      <!-- CONTENT -->
      <div class="content">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h5 class="title">
                  DataTables Advanced Tables
                </h5>
              </div>
              <!-- /.card-heading -->
              <div class="card-body">
                <table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-example">
                  <thead>
                    <tr>
                      <th>Rendering engine</th>
                      <th>Browser</th>
                      <th>Platform(s)</th>
                      <th>Engine version</th>
                      <th>CSS grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="odd gradeX">
                      <td>Trident</td>
                      <td>Internet Explorer 4.0</td>
                      <td>Win 95+</td>
                      <td class="center">4</td>
                      <td class="center">X</td>
                    </tr>
                    <tr class="even gradeC">
                      <td>Trident</td>
                      <td>Internet Explorer 5.0</td>
                      <td>Win 95+</td>
                      <td class="center">5</td>
                      <td class="center">C</td>
                    </tr>
                    <tr class="odd gradeA">
                      <td>Trident</td>
                      <td>Internet Explorer 5.5</td>
                      <td>Win 95+</td>
                      <td class="center">5.5</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="even gradeA">
                      <td>Trident</td>
                      <td>Internet Explorer 6</td>
                      <td>Win 98+</td>
                      <td class="center">6</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="odd gradeA">
                      <td>Trident</td>
                      <td>Internet Explorer 7</td>
                      <td>Win XP SP2+</td>
                      <td class="center">7</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="even gradeA">
                      <td>Trident</td>
                      <td>AOL browser (AOL desktop)</td>
                      <td>Win XP</td>
                      <td class="center">6</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Gecko</td>
                      <td>Firefox 1.0</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td class="center">1.7</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Gecko</td>
                      <td>Firefox 1.5</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td class="center">1.8</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Gecko</td>
                      <td>Firefox 2.0</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td class="center">1.8</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Gecko</td>
                      <td>Firefox 3.0</td>
                      <td>Win 2k+ / OSX.3+</td>
                      <td class="center">1.9</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Gecko</td>
                      <td>Camino 1.0</td>
                      <td>OSX.2+</td>
                      <td class="center">1.8</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Gecko</td>
                      <td>Camino 1.5</td>
                      <td>OSX.3+</td>
                      <td class="center">1.8</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Gecko</td>
                      <td>Netscape 7.2</td>
                      <td>Win 95+ / Mac OS 8.6-9.2</td>
                      <td class="center">1.7</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Gecko</td>
                      <td>Netscape Browser 8</td>
                      <td>Win 98SE+</td>
                      <td class="center">1.7</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Gecko</td>
                      <td>Netscape Navigator 9</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td class="center">1.8</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Gecko</td>
                      <td>Mozilla 1.0</td>
                      <td>Win 95+ / OSX.1+</td>
                      <td class="center">1</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Gecko</td>
                      <td>Mozilla 1.1</td>
                      <td>Win 95+ / OSX.1+</td>
                      <td class="center">1.1</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Gecko</td>
                      <td>Mozilla 1.2</td>
                      <td>Win 95+ / OSX.1+</td>
                      <td class="center">1.2</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Gecko</td>
                      <td>Mozilla 1.3</td>
                      <td>Win 95+ / OSX.1+</td>
                      <td class="center">1.3</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Gecko</td>
                      <td>Mozilla 1.4</td>
                      <td>Win 95+ / OSX.1+</td>
                      <td class="center">1.4</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Gecko</td>
                      <td>Mozilla 1.5</td>
                      <td>Win 95+ / OSX.1+</td>
                      <td class="center">1.5</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Gecko</td>
                      <td>Mozilla 1.6</td>
                      <td>Win 95+ / OSX.1+</td>
                      <td class="center">1.6</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Gecko</td>
                      <td>Mozilla 1.7</td>
                      <td>Win 98+ / OSX.1+</td>
                      <td class="center">1.7</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Gecko</td>
                      <td>Mozilla 1.8</td>
                      <td>Win 98+ / OSX.1+</td>
                      <td class="center">1.8</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Gecko</td>
                      <td>Seamonkey 1.1</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td class="center">1.8</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Gecko</td>
                      <td>Epiphany 2.20</td>
                      <td>Gnome</td>
                      <td class="center">1.8</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Webkit</td>
                      <td>Safari 1.2</td>
                      <td>OSX.3</td>
                      <td class="center">125.5</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Webkit</td>
                      <td>Safari 1.3</td>
                      <td>OSX.3</td>
                      <td class="center">312.8</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Webkit</td>
                      <td>Safari 2.0</td>
                      <td>OSX.4+</td>
                      <td class="center">419.3</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Webkit</td>
                      <td>Safari 3.0</td>
                      <td>OSX.4+</td>
                      <td class="center">522.1</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Webkit</td>
                      <td>OmniWeb 5.5</td>
                      <td>OSX.4+</td>
                      <td class="center">420</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Webkit</td>
                      <td>iPod Touch / iPhone</td>
                      <td>iPod</td>
                      <td class="center">420.1</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Webkit</td>
                      <td>S60</td>
                      <td>S60</td>
                      <td class="center">413</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Presto</td>
                      <td>Opera 7.0</td>
                      <td>Win 95+ / OSX.1+</td>
                      <td class="center">-</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Presto</td>
                      <td>Opera 7.5</td>
                      <td>Win 95+ / OSX.2+</td>
                      <td class="center">-</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Presto</td>
                      <td>Opera 8.0</td>
                      <td>Win 95+ / OSX.2+</td>
                      <td class="center">-</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Presto</td>
                      <td>Opera 8.5</td>
                      <td>Win 95+ / OSX.2+</td>
                      <td class="center">-</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Presto</td>
                      <td>Opera 9.0</td>
                      <td>Win 95+ / OSX.3+</td>
                      <td class="center">-</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Presto</td>
                      <td>Opera 9.2</td>
                      <td>Win 88+ / OSX.3+</td>
                      <td class="center">-</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Presto</td>
                      <td>Opera 9.5</td>
                      <td>Win 88+ / OSX.3+</td>
                      <td class="center">-</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Presto</td>
                      <td>Opera for Wii</td>
                      <td>Wii</td>
                      <td class="center">-</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Presto</td>
                      <td>Nokia N800</td>
                      <td>N800</td>
                      <td class="center">-</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Presto</td>
                      <td>Nintendo DS browser</td>
                      <td>Nintendo DS</td>
                      <td class="center">8.5</td>
                      <td class="center">C/A<sup>1</sup>
                      </td>
                    </tr>
                    <tr class="gradeC">
                      <td>KHTML</td>
                      <td>Konqureror 3.1</td>
                      <td>KDE 3.1</td>
                      <td class="center">3.1</td>
                      <td class="center">C</td>
                    </tr>
                    <tr class="gradeA">
                      <td>KHTML</td>
                      <td>Konqureror 3.3</td>
                      <td>KDE 3.3</td>
                      <td class="center">3.3</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeA">
                      <td>KHTML</td>
                      <td>Konqureror 3.5</td>
                      <td>KDE 3.5</td>
                      <td class="center">3.5</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeX">
                      <td>Tasman</td>
                      <td>Internet Explorer 4.5</td>
                      <td>Mac OS 8-9</td>
                      <td class="center">-</td>
                      <td class="center">X</td>
                    </tr>
                    <tr class="gradeC">
                      <td>Tasman</td>
                      <td>Internet Explorer 5.1</td>
                      <td>Mac OS 7.6-9</td>
                      <td class="center">1</td>
                      <td class="center">C</td>
                    </tr>
                    <tr class="gradeC">
                      <td>Tasman</td>
                      <td>Internet Explorer 5.2</td>
                      <td>Mac OS 8-X</td>
                      <td class="center">1</td>
                      <td class="center">C</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Misc</td>
                      <td>NetFront 3.1</td>
                      <td>Embedded devices</td>
                      <td class="center">-</td>
                      <td class="center">C</td>
                    </tr>
                    <tr class="gradeA">
                      <td>Misc</td>
                      <td>NetFront 3.4</td>
                      <td>Embedded devices</td>
                      <td class="center">-</td>
                      <td class="center">A</td>
                    </tr>
                    <tr class="gradeX">
                      <td>Misc</td>
                      <td>Dillo 0.8</td>
                      <td>Embedded devices</td>
                      <td class="center">-</td>
                      <td class="center">X</td>
                    </tr>
                    <tr class="gradeX">
                      <td>Misc</td>
                      <td>Links</td>
                      <td>Text only</td>
                      <td class="center">-</td>
                      <td class="center">X</td>
                    </tr>
                    <tr class="gradeX">
                      <td>Misc</td>
                      <td>Lynx</td>
                      <td>Text only</td>
                      <td class="center">-</td>
                      <td class="center">X</td>
                    </tr>
                    <tr class="gradeC">
                      <td>Misc</td>
                      <td>IE Mobile</td>
                      <td>Windows Mobile 6</td>
                      <td class="center">-</td>
                      <td class="center">C</td>
                    </tr>
                    <tr class="gradeC">
                      <td>Misc</td>
                      <td>PSP browser</td>
                      <td>PSP</td>
                      <td class="center">-</td>
                      <td class="center">C</td>
                    </tr>
                    <tr class="gradeU">
                      <td>Other browsers</td>
                      <td>All others</td>
                      <td>-</td>
                      <td class="center">-</td>
                      <td class="center">U</td>
                    </tr>
                  </tbody>
                </table>
                <!-- /.table-responsive -->
                <div class="well">
                  <h4>DataTables Usage Information</h4>
                  <p>DataTables is a very flexible, advanced tables plugin for jQuery. In SB Admin, we are using a
                    specialized version of DataTables built for Bootstrap 3. We have also customized the table headings
                    to use Font Awesome icons in place of images. For complete documentation on DataTables, visit their
                    website at <a target="_blank" href="https://datatables.net/">https://datatables.net/</a>.</p>
                  <a class="btn btn-default btn-lg btn-block" data-toggle="modal" data-target="#loginModal" href="#">View
                    DataTables Documentation</a>
                </div>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header">
                <h5 class="title">Edit Profile</h5>
              </div>
              <div class="card-body">
                <form>
                  @csrf
                  <div class="row">
                    <div class="col-md-5 pr-1">
                      <div class="form-group">
                        <label>Company (disabled)</label>
                        <input type="text" class="form-control" disabled="" placeholder="Company" value="Creative Code Inc.">
                      </div>
                    </div>
                    <div class="col-md-3 px-1">
                      <div class="form-group">
                        <label>Username</label>
                        <input type="text" class="form-control" placeholder="Username" value="michael23">
                      </div>
                    </div>
                    <div class="col-md-4 pl-1">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" placeholder="Email">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 pr-1">
                      <div class="form-group">
                        <label>First Name</label>
                        <input type="text" class="form-control" placeholder="Company" value="Mike">
                      </div>
                    </div>
                    <div class="col-md-6 pl-1">
                      <div class="form-group">
                        <label>Last Name</label>
                        <input type="text" class="form-control" placeholder="Last Name" value="Andrew">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Address</label>
                        <input type="text" class="form-control" placeholder="Home Address" value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4 pr-1">
                      <div class="form-group">
                        <label>City</label>
                        <input type="text" class="form-control" placeholder="City" value="Mike">
                      </div>
                    </div>
                    <div class="col-md-4 px-1">
                      <div class="form-group">
                        <label>Country</label>
                        <input type="text" class="form-control" placeholder="Country" value="Andrew">
                      </div>
                    </div>
                    <div class="col-md-4 pl-1">
                      <div class="form-group">
                        <label>Postal Code</label>
                        <input type="number" class="form-control" placeholder="ZIP Code">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>About Me</label>
                        <textarea rows="4" cols="80" class="form-control" placeholder="Here can be your description"
                          value="Mike">Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-user">
              <div class="image">
                <img src="../assets/img/bg5.jpg" alt="...">
              </div>
              <div class="card-body">
                <div class="author">
                  <a href="#">
                    <img class="avatar border-gray" src="../assets/img/mike.jpg" alt="...">
                    <h5 class="title">Mike Andrew</h5>
                  </a>
                  <p class="description">
                    michael24
                  </p>
                </div>
                <p class="description text-center">
                  "Lamborghini Mercy
                  <br> Your chick she so thirsty
                  <br> I'm in that two seat Lambo"
                </p>
              </div>
              <hr>
              <div class="button-container">
                <button href="#" class="btn btn-neutral btn-icon btn-round btn-lg">
                  <i class="fab fa-facebook-f"></i>
                </button>
                <button href="#" class="btn btn-neutral btn-icon btn-round btn-lg">
                  <i class="fab fa-twitter"></i>
                </button>
                <button href="#" class="btn btn-neutral btn-icon btn-round btn-lg">
                  <i class="fab fa-google-plus-g"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end content -->
      
      <!-- FOOTER -->
      <footer class="footer">
        <div class="container">
          <nav>
            <ul>
              <li>
                <a href="https://www.creative-tim.com">
                  Creative Tim
                </a>
              </li>
              <li>
                <a href="http://presentation.creative-tim.com">
                  About Us
                </a>
              </li>
              <li>
                <a href="http://blog.creative-tim.com">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div class="copyright" id="copyright">
            &copy;
            <script>
              document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))
            </script>, Designed by
            <a href="https://www.invisionapp.com" target="_blank">Invision</a>. Coded by
            <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>.
          </div>
        </div>



      </footer>
      <!-- end footer -->

    </div>
  </div>

  <!-- MODALS -->

  <!-- LOGIN MODAL -->
  <div class="modal" id="loginModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Login</h5>
          <button class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <form>
            @csrf
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" placeholder="Username" class="form-control">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" placeholder="Password" class="form-control">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" data-dismiss="modal">Login</button>
        </div>
      </div>
    </div>
  </div>

  <!-- end modals -->

  </div>
  <!--   Core JS Files   -->
  <script src="js/now-ui-back.js"></script>
  <!--  Google Maps Plugin    -->
  <!-- <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script> -->
  
  <!--  Notifications Plugin    -->
  <!-- <script src="../assets/js/plugins/bootstrap-notify.js"></script> -->
  <!-- Control Center for Now Ui Dashboard: parallax effects, scripts for the example pages etc -->
  <!-- <script src="../assets/js/now-ui-dashboard.min.js?v=1.2.0" type="text/javascript"></script> -->

  <!-- DataTables JavaScript -->
  <script src="js/datatables.js"></script>

  <!-- Page-Level Demo Scripts - Tables - Use for reference -->
  <script>
    $(document).ready(function () {
      $('#dataTables-example').DataTable({
        responsive: true
      });
    });
  </script>
</body>

</html>