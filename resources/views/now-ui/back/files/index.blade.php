@extends(env('THEME_BACK').'.back.layout')


@section('css')
  <!-- DataTables CSS -->
  <!-- <link rel="stylesheet" type="text/css" href="{{ asset('css/datatables.css') }}"> -->
  
  <style>
    .address {
        font-size: 0.8em !important;
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
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h5 class="title d-inline-block mr-3 mb-0">Файлы</h5>
            <button class="btn btn-primary btn-round d-inline-block my-0" id="newFile" type="button" data-toggle="modal" data-target="#fileModal">
              Добавить новый
            </button>
          </div>
          <div class="card-body">
              <table class="table table-striped table-bordered table-responsive-md" style="width:100%" id="filesTable">
                <thead class="text-primary">
                  <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Путь</th>
                    <th>Время создания</th>
                    <th>Время редактирования</th>
                  </tr>
                </thead>
                <tbody>
                  @foreach($files as $file)
                    <tr>
                      <td>{{ $file->id }}</td>
                      <td>{{ $file->title }}</td>
                      <td>{{ $file->url }}</td>
                      <td>{{ $file->created_at }}</td>
                      <td>{{ $file->updated_at }}</td>
                    </tr>
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
                  <label for="title">Выберите файл</label>
<!--                   <div class="custom-file d-flex align-items-center"> -->
<!--                     <label class="custom-file-label form-control align-self-center" for="customFile">Файл не выбран</label> -->
                    <input type="file" class="" name="file" id="file">
<!--                   </div> -->
                  
                  <div class="form-group mt-2">
                    <label for="title">Название</label>
                    <input type="text" class="form-control" name="title" id="title" required>
                  </div>
                  
                </div>
              
            </div>
                  

          <div class="modal-footer pb-0">
            <button class="btn btn-link btn-danger my-0 mr-auto d-none" type="delete" id="deleteFile" dismiss="modal">Удалить</button>
            <button class="btn btn-primary float-right my-0" type="submit" id="saveFile" dismiss="modal">Добавить</button>
          </div>
        
        </form>
      </div>
    </div>
  </div>
@endsection

@section('footer')
  {!! $footer !!}
@endsection


@section('js')
    <!-- DataTables JavaScript -->
    <!-- <script type="text/javascript" src="{{ asset('js/datatables.js') }}" ></script> -->

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
          // responsive: true,
          "language": {
                "url": "/dataTables.russian.lang"
          },
        });
        
        // seve File
        $('#fileForm').submit(function(event) {
          var form = $(this);
          $.ajax({
            method: form.attr('method'),
            url: form.attr('action'),
            data: form.serialize(),
            dataType: 'json',
            success: function(data)
            {
              $('#saveModal').modal('toggle');
              form.cleanform();
//               $('#filesTable').DataTable().ajax.reload();
              
              
//               var color = (data.exception == undefined) ? "success" : "warning";
//               var icon = (data.exception == undefined) ? "now-ui-icons ui-1_check" : "now-ui-icons ui-1_bell-53";
//               nowuiDashboard.showNotification({
//                 color: color,
//                 message: data.message,
//                 icon: icon,
//                 from: 'top',
//                 align: 'right'
//               });
            },
//             error: function(data) {
// //               alert(data.message);
//             }
          });
          event.preventDefault(); // avoid to execute the actual submit of the form.
        });

        
        //Load the Job in modal
        $('#jobModal').on('show.bs.modal', function (event) {
          var button = $(event.relatedTarget) // Button that triggered the modal
          var id = button.data('id') // Extract info from data-* attributes
          // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
          if (id !== undefined) {
            var data = $.ajax({
               method: 'get',
               url: 'jobs/' + id + '/edit',
               dataType: 'json',
               success: function(resp)
               {
                  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
                  var modal = $('#jobModal');
                  modal.find('.modal-header h5').text('Организация: ' + resp.data.title_ru);
                  modal.find('input[name="id"]').val(resp.data.id);
                  modal.find('input[name="title_ru"]').val(resp.data.title_ru);
                  modal.find('input[name="city_ru"]').val(resp.data.city_ru);
                  modal.find('textarea[name="address_ru"]').val(resp.data.address_ru);
                  modal.find('input[name="title_en"]').val(resp.data.title_en);
                  modal.find('input[name="city_en"]').val(resp.data.city_en);
                  modal.find('textarea[name="address_en"]').val(resp.data.address_en);
                  $('#deleteJob').removeClass('d-none');
                  $('#saveJob').text('Обновить');
                  $('#jobForm').attr("method", "PUT");
                  $('#jobForm').attr("action", "/admin/jobs/" + resp.data.id);
               }
            });
          } else {
            var modal = $('#jobModal');
            modal.find('.modal-header h5').text('Новая организация');
            $('#deleteJob').addClass('d-none');
            $('#saveJob').text('Сохранить');
            $('#jobForm').cleanform();
            $('#jobForm').attr("method", "POST");
            $('#jobForm').attr("action", "/admin/jobs");
          }
        });
        

        // delete Job
        $('#deleteJob').on('click', function(event) {
          var id = $('#jobForm input[name="id"]').val();
          var title = $('#jobForm input[name="title_ru"]').val();
          event.preventDefault()
              $.ajax({
                method: "DELETE",
                headers: {
                  'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: "{{ url('/admin/jobs') }}/" + id,
                dataType: 'json',
                beforeSend:function(){
                     return confirm("Удалить организацию " + title + "?");
                },
                success: function(data)
                 {
                    $('#jobModal').modal('toggle');
                    $('#jobForm').cleanform();
                    $('#jobs-table').DataTable().ajax.reload();
                    
                    var color = (data.exception == undefined) ? "success" : "warning";
                    var icon = (data.exception == undefined) ? "now-ui-icons ui-1_check" : "now-ui-icons ui-1_bell-53";
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
          
        });
      
        (function( $ ) {
           //form clean
          $.fn.cleanform = function() {
            $(this).find("input[type=text], textarea").val("");
          };
          
        })( jQuery );
        
      });
      
      
    </script>
@endsection
