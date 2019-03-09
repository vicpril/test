@extends(env('THEME_BACK').'.back.layout')


@section('css')
  
@endsection


@section('sidebar')
      {!! $sidebar !!}
@endsection


@section('navbar')
      {!! $navbar !!}
@endsection


@section('content')
<div class="container">
        <div class="row">
            @if ($message = Session::get('success'))

                <div class="alert alert-success alert-block">

                    <button type="button" class="close" data-dismiss="alert">×</button>

                    <strong>{{ $message }}</strong>

                </div>

            @endif

            @if (count($errors) > 0)
                <div class="alert alert-danger">
                    <strong>Whoops!</strong> There were some problems with your input.<br><br>
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
        </div>
        
              <div class="card mt-6">
{{--                 <div class="image">
                  <img src="/storage/avatars/{{ $user->avatar }}" alt="...">
                </div> --}}
              <div class="card-body">
                <div class="author">
                  <a href="#">
                    <img class="avatar border-gray" src="/storage/avatars/{{ $user->avatar }}" alt="...">
                    <h5 class="title">{{$user->displayName}}</h5>
                  </a>
                  <p class="description">
                    
                  </p>
                </div>
                
              </div>
              <hr>
              
            </div>
            <div class="card-footer">
                  <form action="/admin/profile" method="post" enctype="multipart/form-data">
                    @csrf
                    <div class="form-group">
                        <input type="file" class="form-control-file" name="avatar" id="exampleInputFile" aria-describedby="fileHelp">
                        <small id="fileHelp" class="form-text text-muted">Please upload a valid image file. Size of image should not be more than 2MB.</small>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
  
          </div>
  
  <div class="row justify-content-center">

            <div class="profile-header-container">
                <div class="profile-header-img">
                    <img class="rounded-circle" src="/storage/avatars/{{ $user->avatar }}" />
                    <!-- badge -->
                    <div class="rank-label-container">
                        <span class="label label-default rank-label">{{$user->name}}</span>
                    </div>
                </div>
            </div>

        </div>
        <div class="row justify-content-center">
            <form action="/admin/profile" method="post" enctype="multipart/form-data">
                @csrf
                <div class="form-group">
                    <input type="file" class="form-control-file" name="avatar" id="avatarFile" aria-describedby="fileHelp">
                    <small id="fileHelp" class="form-text text-muted">Please upload a valid image file. Size of image should not be more than 2MB.</small>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          
       <div class="row justify-content-center">
          <form action="/admin/profile" method="post" enctype="multipart/form-data">
                @csrf
                <div class="custom-file">
                  <input type="file" class="custom-file-input" id="customFile" name="avatar">
                  <label class="custom-file-label" for="customFile">Choose file</label>
                </div>
            </form>
        </div>
</div>
    </div>
@endsection


@section('modals')

@endsection


@section('footer')
  {!! $footer !!}
@endsection


@section('js')
<!--   <script text="text/javascript" src="{{ asset('js/bs-custom-file-input.min.js') }}"></script> -->
<!--   <script defer>
    $(document).ready(function () {
      bsCustomFileInput.init()
    })
  </script> -->
@endsection
