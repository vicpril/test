@extends(env('THEME_BACK').'.back.layout')


@section('css')
  <!-- DataTables CSS -->
  <!-- <link rel="stylesheet" type="text/css" href="{{ asset('css/datatables.css') }}"> -->
  
  <style>
    .path {
      font-size: 0.8em !important;
    }
    .icon-link-delete {
      color: grey !important;
    }
    .icon-link-delete:hover {
      color: red !important;
    }
  
  </style>
  
@endsection


@section('sidebar')
      {!! $sidebar !!}
@endsection


@section('navbar')
      {!! $navbar !!}
@endsection

@section('content')
  <div class="content">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            
           <div class="form-inline">
            <button class="btn btn-sm btn-primary btn-round my-0 mr-1" data-input="filepath" id="chooseFile">Открыть</button>
            <div class="form-group">
              <input type="text" readonly class="form-control-plaintext mx-1" id="filepath" placeholder="Файл не выбран">
             </div>
              <i class="now-ui-icons ui-1_simple-remove icon-link-delete"></i>
          </div>
            
          </div>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h5 class="title d-inline-block mr-3 mb-0">Файлы</h5>
            <button class="btn btn-primary btn-round d-inline-block my-0" id="newFile" type="button" data-toggle="modal" data-target="#fileModal">
              Добавить новый
            </button>
          </div>
          <div class="card-body">
              <table class="table table-striped table-bordered table-responsive-lg" style="width:100%" id="filesTable">
                <thead class="text-primary">
                  <tr>
                    {{-- <th>ID</th> --}}
                    <th>Название</th>
                    <th>Путь</th>
                    <th>Время создания</th>
                    <th>Время редактирования</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                 @foreach($files as $file)
                    @include(env('THEME_BACK').'.back.files.table_row', $file)  
                  @endforeach
                </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
</div>
@endsection


@section('modals')
<!--   NEW FILE MODAL -->
  <div class="modal fade" id="fileModal">
    <div class="modal-dialog">
      <div class="modal-content">
          
        <form method="POST" action="{{ route('files.store') }}" id="fileForm">
          <div class="modal-header">
            <h5 class="title my-0">Добавить файл</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">

            <div class="row">
                @csrf
                <input type="text" class="form-control" name="id" hidden disable>
                <div class="col-md-12">
                  <div class="form-group mt-2">
                    <label for="title d-block">Файл</label>
                    <input type="file" class=" d-block" name="file" id="file" required>
                  </div>

                  <div class="form-group mt-2">
                    <label for="title">Название</label>
                    <input type="text" class="form-control" name="title" id="title" required>
                  </div>

                  <div class="form-group mt-2">
                    <label for="title">Тип файла</label>
                    <select type="select" class="form-control" name="type" id="type" required>
                      <option value='files'>Документы для статьи</option>
                      <option value='avatars'>Фотография пользователя</option>
                    </select>
                  </div>
                  
                </div>
              
            </div>

          </div>
          
          <div class="modal-footer">
            <button class="btn btn-primary float-right my-0" type="submit" id="saveFile" dismiss="modal">Добавить</button>
          </div>
        
        </form>
      </div>
    </div>
  </div>
<!--  END NEW FILE MODAL -->
    
<!--  UPDATE TITLE MODAL -->
  <div class="modal fade" id="titleModal">
    <div class="modal-dialog">
      <div class="modal-content">
          
        <form method="PUT" action="" id="titleForm">
          <div class="modal-header">
            <h5 class="title my-0">Изменить название файла</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">

            <div class="row">
                @csrf
                <input type="text" class="form-control" name="id" hidden disable>
                <div class="col-md-12">

                  <div class="form-group mt-2">
                    <label for="title">Название</label>
                    <input type="text" class="form-control" name="title" id="title-up" required>
                  </div>

                </div>
            </div>

          </div>
          
          <div class="modal-footer">
            <button class="btn btn-primary float-right my-0" type="submit" id="saveTitleFile" dismiss="modal">Обновить</button>
          </div>
        
      </form>
    </div>
  </div>    
</div>
<!--  END UPDATE TITLE MODAL -->

    
@endsection

@section('footer')
  {!! $footer !!}
@endsection


@section('js')
  <script>
   var route_prefix = "{{ url(config('lfm.url_prefix', config('lfm.prefix'))) }}";
  </script>  
  <script>
    {!! \File::get(base_path('vendor/unisharp/laravel-filemanager/public/js/lfm.js')) !!}
  </script>
  <script>
    $('#chooseFile').filemanager('file', {prefix: route_prefix});
    $('#lfm2').filemanager('file', {prefix: route_prefix});
  </script>

    <!-- DataTables JavaScript -->
    {{-- <script type="text/javascript" src="{{ asset('js/datatables.js') }}" ></script> --}}

    <!-- Page-Level Demo Scripts - Tables - Use for reference -->
    <script defer>
      $(document).ready(function () {
        
        // Set up file's title on change
        $('#file').on('change', function(e){
          var filepath = $(this).val();
//           var filename = filepath.replace(/^.*?([^\\\/]*)$/, '$1');
          var filename = filepath.split(/[\\/]/g).pop().split('.')[0];
          $('#title').val(filename); 
        });
        
        // DataTable - load
        $('#filesTable').DataTable({
          "language": { "url": "/dataTables.russian.lang"},
          "order": [ 3, 'desc' ],
          "columnDefs": [
            { "orderable": false, "targets": 4 }
          ]
        });
        
// seve File
        $('#fileForm').submit(function(event) {
          event.preventDefault(); // avoid to execute the actual submit of the form.
          var form = $(this);
          $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              },
            method: form.attr('method'),
            url: form.attr('action'),
            data: new FormData(this),
              contentType: false,
              cache: false,
              processData:false,
            
            dataType: 'json',
            success: function(data)
            {
              $('#fileModal').modal('hide');
              form.cleanform();
              if (data.exception == undefined) {
                var color =  "success";
                var icon = "now-ui-icons ui-1_check";
                  var table = $('#filesTable').DataTable();
                  table.row($("tr#" + data.id)).remove();
                  table.row.add($(data.row)[0]).draw();
              } else {
                var color = "warning";
                var icon = "now-ui-icons ui-1_bell-53";
              }
              nowuiDashboard.showNotification({
                color: color,
                message: data.message,
                icon: icon,
                from: 'top',
                align: 'right'
              });
            },
            error: function(data) {
              nowuiDashboard.showNotification({
                color: "danger",
                message: data.message,
                icon: "now-ui-icons ui-2_settings-90",
                from: 'top',
                align: 'right'
              });
            }
          });
        });

        //update title
        $('#titleForm').submit(function(event){
          event.preventDefault();
          var form = $(this);
          var id = $(this).find('input[name=id]').val();
          $.ajax({
            method: "PUT",
            url: "{{ url('/admin/files') }}/" + id,
            data: form.serialize(),
            dataType: "json",
            success: function(data)
            {
                $('#titleModal').modal('hide');
                form.cleanform();
                if (data.exception == undefined) {
                  var color =  "success";
                  var icon = "now-ui-icons ui-1_check";
                    var table = $('#filesTable').DataTable();
                    table.row($("tr#" + id)).remove();
                    table.row.add($(data.row)[0]).draw();
                } else {
                  var color = "warning";
                  var icon = "now-ui-icons ui-1_bell-53";
                }
                nowuiDashboard.showNotification({
                  color: color,
                  message: data.message,
                  icon: icon,
                  from: 'top',
                  align: 'right'
                });
            }
           })
          })
        
        
        //Load the File in modal
        $(document).on('show.bs.modal', '#titleModal', function (event) {
          var button = $(event.relatedTarget) // Button that triggered the modal
          var id = button.data('id') // Extract info from data-* attributes
          // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
            var data = $.ajax({
               method: 'get',
               url: 'files/' + id + '/edit',
               dataType: 'json',
               success: function(resp)
               {
                  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
                  var modal = $('#titleModal');
                  modal.find('input[name="title"]').val(resp.data.title);
                  modal.find('input[name="id"]').val(resp.data.id);
               }
            });
        });
        

// delete File
        $(document).on('click', '.delete', function(event) {
          var id = $(this).closest('tr').attr('id');
          var title = $(this).closest('tr').children('td.file-title:first').text();
          event.preventDefault()
          $.deleteFile(id, title);
        });
      
        (function( $ ) {
//form clean
          $.fn.cleanform = function() {
            $(this).find("input[type=text], input[type=file]").val("");
            $(this).find("select").val("files");
          };
          
//delete file function
          $.deleteFile = function(id, title) {
            $.ajax({
                method: "DELETE",
                headers: {
                  'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: "{{ url('/admin/files') }}/" + id,
                dataType: 'json',
                beforeSend:function(){
                     return confirm("Удалить файл " + title + "?");
                },
                success: function(data)
                 {
                    $('#fileModal').modal('hide');
                    $('#fileForm').cleanform();
                    if (data.exception == undefined && data.status == 'success') {
                      var color =  "success";
                      var icon = "now-ui-icons ui-1_check";
                        var table = $('#filesTable').DataTable();
                        table.row($("tr#" + id)).remove().draw();
                    } else {
                      var color = "warning";
                      var icon = "now-ui-icons ui-1_bell-53";
                    }
                    nowuiDashboard.showNotification({
                      color: color,
                      message: data.message,
                      icon: icon,
                      from: 'top',
                      align: 'right'
                    });
                 },
                error: function(data) {
                  alert(data.message);
                }
             });
            //END delete file function
            
          };
          
        })( jQuery );
        
      });
      
      
    </script>
@endsection
