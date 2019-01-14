@extends(env('THEME_BACK').'.back.layout')

@section('content')
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

<!-- end modals -->
@endsection