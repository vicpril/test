<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Dashboard Template · Bootstrap</title>

  <!-- Bootstrap core CSS -->
  {{--
  <link href="dist/css/bootstrap.min.css" rel="stylesheet"> --}}

  <!-- Custom styles for this template -->
  <link href="css/back.css" rel="stylesheet"> {{-- Fontawsom css --}}
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
    crossorigin="anonymous">
</head>

<body>

  <!-- NAVBAR -->
  <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
    <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <a class="nav-link" href="#">Sign out</a>
      </li>
    </ul>
  </nav>
  <!-- end navbar -->

  <!-- WRAPPER -->
  <div class="container-fluid">
    <div class="row">

      <!-- SIDEBAR -->
      <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                <span data-feather="home"></span>
                Dashboard <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="file"></span>
                Orders
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="shopping-cart"></span>
                Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="users"></span>
                Customers
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="bar-chart-2"></span>
                Reports
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="layers"></span>
                Integrations
              </a>
            </li>
          </ul>

          <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Saved reports</span>
            <a class="d-flex align-items-center text-muted" href="#">
              <span data-feather="plus-circle"></span>
            </a>
          </h6>
          <ul class="nav flex-column mb-2">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Current month
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Last quarter
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Social engagement
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Year-end sale
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <!-- end sidebar -->

      <!-- CONTENT -->
      <main role="main" class="col-md-10 ml-sm-auto col-lg-10 px-4 bg-dark">
        <div class="card bg-light mb-2">
          <div class="card-header bg-info">
            <h1 class="h2 text-white m">Dashboard</h1>
          </div>
          <div class="card-body">
            <form class="form-inline">
              <label class="sr-only" for="inlineFormInputName2">Name</label>
              <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe">

              <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
              <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">@</div>
                </div>
                <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username">
              </div>

              <div class="form-check mb-2 mr-sm-2">
                <input class="form-check-input" type="checkbox" id="inlineFormCheck">
                <label class="form-check-label" for="inlineFormCheck">
                      Remember me
                    </label>
              </div>

              <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </form>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary btn-block" data-toggle="modal" data-target="#myModal">
                <i class="fas fa-plus"></i> Modal
            </a>
          </div>
        </div>


        <!-- table -->
        <div class="card bg-light">
          <div class="card-header bg-info">
            <h1 class="h2 text-white mb-0">Table</h1>
          </div>
          <div class="card-body">
            <div class="table-responsive bg-white">
              <table class="table table-striped table-sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,001</td>
                    <td>Lorem</td>
                    <td>ipsum</td>
                    <td>dolor</td>
                    <td>sit</td>
                  </tr>
                  <tr>
                    <td>1,002</td>
                    <td>amet</td>
                    <td>consectetur</td>
                    <td>adipiscing</td>
                    <td>elit</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>Integer</td>
                    <td>nec</td>
                    <td>odio</td>
                    <td>Praesent</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>libero</td>
                    <td>Sed</td>
                    <td>cursus</td>
                    <td>ante</td>
                  </tr>
                  <tr>
                    <td>1,004</td>
                    <td>dapibus</td>
                    <td>diam</td>
                    <td>Sed</td>
                    <td>nisi</td>
                  </tr>
                  <tr>
                    <td>1,005</td>
                    <td>Nulla</td>
                    <td>quis</td>
                    <td>sem</td>
                    <td>at</td>
                  </tr>
                  <tr>
                    <td>1,006</td>
                    <td>nibh</td>
                    <td>elementum</td>
                    <td>imperdiet</td>
                    <td>Duis</td>
                  </tr>
                  <tr>
                    <td>1,007</td>
                    <td>sagittis</td>
                    <td>ipsum</td>
                    <td>Praesent</td>
                    <td>mauris</td>
                  </tr>
                  <tr>
                    <td>1,008</td>
                    <td>Fusce</td>
                    <td>nec</td>
                    <td>tellus</td>
                    <td>sed</td>
                  </tr>
                  <tr>
                    <td>1,009</td>
                    <td>augue</td>
                    <td>semper</td>
                    <td>porta</td>
                    <td>Mauris</td>
                  </tr>
                  <tr>
                    <td>1,010</td>
                    <td>massa</td>
                    <td>Vestibulum</td>
                    <td>lacinia</td>
                    <td>arcu</td>
                  </tr>
                  <tr>
                    <td>1,011</td>
                    <td>eget</td>
                    <td>nulla</td>
                    <td>Class</td>
                    <td>aptent</td>
                  </tr>
                  <tr>
                    <td>1,012</td>
                    <td>taciti</td>
                    <td>sociosqu</td>
                    <td>ad</td>
                    <td>litora</td>
                  </tr>
                  <tr>
                    <td>1,013</td>
                    <td>torquent</td>
                    <td>per</td>
                    <td>conubia</td>
                    <td>nostra</td>
                  </tr>
                  <tr>
                    <td>1,014</td>
                    <td>per</td>
                    <td>inceptos</td>
                    <td>himenaeos</td>
                    <td>Curabitur</td>
                  </tr>
                  <tr>
                    <td>1,015</td>
                    <td>sodales</td>
                    <td>ligula</td>
                    <td>in</td>
                    <td>libero</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <!-- end content -->

    </div>
  </div>
  <!-- end wrapper -->

  <!-- MODALS -->

  <!-- ADD POST MODAL -->
  <div class="modal fade" id="myModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title">Add Post</h5>
          <button class="close" data-dismiss="modal">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="title">Title</label>
              <input type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="category">Category</label>
              <select class="form-control">
                <option value="">Web Development</option>
                <option value="">Tech Gadgets</option>
                <option value="">Business</option>
                <option value="">Health & Wellness</option>
              </select>
            </div>
            <div class="form-group">
              <label for="image">Upload Image</label>
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="image">
                <label for="image" class="custom-file-label">Choose File</label>
              </div>
              <small class="form-text text-muted">Max Size 3mb</small>
            </div>
            <div class="form-group">
              <label for="body">Body</label>
              <textarea name="editor1" class="form-control"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" data-dismiss="modal">Save Changes</button>
        </div>
      </div>
    </div>
  </div>


  <!-- SCRIPTS -->
  {{-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script> --}}
  {{-- <script src="dist/js/bootstrap.bundle.min.js"></script> --}}
  <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
  {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"></script> --}}
  <script src="js/back.js"></script>
</body>

</html>