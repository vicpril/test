@extends('back.layout')

@section('css')
    <style>
        textarea { resize: vertical; }
    </style>
    <!-- Colorbox -->
    <link href="{{ asset('adminlte/plugins/colorbox/colorbox.css') }}" rel="stylesheet">
    <!-- Select2 -->
    <link href="{{ asset('adminlte/plugins/select2/select2.min.css') }}" rel="stylesheet">
    <!-- iCheck -->
    <link href="{{ asset('adminlte/plugins/iCheck/all.css') }}" rel="stylesheet">
   
@endsection

@section('main')

    @yield('form-open')
        {{ csrf_field() }}

        <div class="row">
            <!-- MAIN PART -->
            <div class="col-md-9">
                @if (session('post-ok'))
                    @component('back.components.alert')
                        @slot('type')
                            success
                        @endslot
                        {!! session('post-ok') !!}
                    @endcomponent
                @endif
              
                @component('back.components.box')
                   @slot('type')
                        box-primary
                    @endslot
                    @slot('boxTitle')
                        @lang('Title')
                    @endslot
                    <label for="title-ru" class="">Русский:</label>
                    @include('back.partials.input',[
                        'input' => [
                                    'name' => 'title-ru',
                                    'value' => isset($article) ? $article->ru->title : '',
                                    'input' => 'text',
                                    'required' => true,
                                ]
                    ])
                    <label for="title-en" class="">Английский:</label>
                    @include('back.partials.input',[
                        'input' => [
                                    'name' => 'title-en',
                                    'value' => isset($article) ? $article->en->title : '',
                                    'input' => 'text',
                                    'required' => true,
                                ]
                    ])
                @endcomponent
              
                @include('back.partials.boxinput', [
                    'box' => [
                        'type' => 'box-primary',
                        'title' => __('Title'),
                    ],
                    'input' => [
                        'name' => 'title',
                        'value' => isset($article) ? $article->title : '',
                        'input' => 'text',
                        'required' => true,
                    ],
                ])
                @include('back.partials.boxinput', [
                    'box' => [
                        'type' => 'box-primary',
                        'title' => __('Excerpt'),
                    ],
                    'input' => [
                        'name' => 'excerpt',
                        'value' => isset($article) ? $article->excerpt : '',
                        'input' => 'textarea',
                        'rows' => 3,
                        'required' => true,
                    ],
                ])
                @include('back.partials.boxinput', [
                    'box' => [
                        'type' => 'box-primary',
                        'title' => __('Body'),
                    ],
                    'input' => [
                        'name' => 'body',
                        'value' => isset($article) ? $article->body : '',
                        'input' => 'textarea',
                        'rows' => 10,
                        'required' => true,
                    ],
                ])
                <button type="submit" class="btn btn-primary">@lang('Submit')</button>
            </div>
            <!-- RIGHT SIDEBAR PART -->
            <div class="col-md-3">
         
                <!-- Status -->
                @component('back.components.box')
                    @slot('type')
                        @if (isset($article))
                            @if ($article->status->name === 'public')
                                box-solid box-success
                            @else
                                box-solid box-danger
                            @endif
                        @else
                            box-info
                        @endif
                    @endslot
                    @slot('boxTitle')
                        @lang('Status')
                    @endslot
                    
                    <!-- <label for="Status">Status</label> -->
                    @include('back.partials.input', [
                            'input' => [
                                    'name' => 'Status',
                                    'values' => isset($article) ? $article->status->id : collect(),
                                    'input' => 'select',
                                    'options' => [
                                                    2 => 'Черновик',
                                                    1 => 'Опубликован',
                                                    ],
                                ],
                        ])
                    @if (isset($article))
                        <div><span id="timestamp">'Дата обновления:'<b>$article->updated_at</b></span></div>
                    @endif

                    @slot('footer')
                        @if (isset($article))
                            <button type="delete" class="btn btn-default pull-left" style="color: red;">@lang('Delete')</button>
                            <button type="submit" class="btn btn-primary pull-right">@lang('Save')</button>
                        @else
                            <button type="submit" class="btn btn-default pull-left" >@lang('Save')</button>
                            <button type="public" class="btn btn-primary pull-right">@lang('Submit')</button>
                        @endif   
                    @endslot
                @endcomponent

                <!-- Issue -->
                @component('back.components.box')
                    @slot('type')
                        box-info
                    @endslot
                    @slot('boxTitle')
                        @lang('Issue')
                    @endslot
                        <div>
                          <div class="col-sm-3">
                            <label for="year" class="">@lang('Year'):</label>
                          </div>
                          <div class="col-sm-9">
                            @include('back.partials.input',[
                                'input' => [
                                    'name' => 'year',
                                    'value' => isset($article) ? $article->issue->year : '',
                                    'input' => 'text',
                                    'required' => true,
                                    
                                ]
                            ]) 
                          </div>
                        </div>
                        <div>
                          <div class="col-sm-3">
                            <label for="no" class="">@lang('No'):</label>
                          </div>
                          <div class="col-sm-9">
                            @include('back.partials.input',[
                                'input' => [
                                    'name' => 'no',
                                    'values' => isset($article) ? $article->issue->no : collect(),
                                    'input' => 'select',
                                    'options' => [1, 2, 3, 4],
                                    'required' => true,
                                ]
                            ])
                            </div>
                        </div>
                      <div>
                          <div class="col-sm-3">
                            <label for="no" class="">@lang('Part'):</label>
                          </div>
                          <div class="col-sm-9">
                            @include('back.partials.input',[
                                'input' => [
                                    'name' => 'tom',
                                    'values' => isset($article) ? $article->issue->tom : collect(),
                                    'input' => 'select',
                                    'options' => [1, 2],
                                    'required' => true,
                                ]
                            ])
                            </div>
                        </div>
                      <div class="col-sm-12">
<!--                           <div class="col-sm-3"> -->
<!--                             <label for="stol" class="pull-right">@lang('Stol'):</label> -->
<!--                           </div> -->
<!--                           <div class="col-sm-9"> -->
                            @include('back.partials.input',[
                                'input' => [
                                    'label' => 'Эта записть отностится к круглому столу',
                                    'name' => 'stol',
                                    'value' => isset($article) ? $article->stol : '',
                                    'input' => 'checkbox',
                                    'class' => '',
                                ]
                            ])
<!--                             </div> -->
                        </div>
              
                @endcomponent
              
                <!-- Category -->
                @component('back.components.box')
                    @slot('type')
                        box-warning
                    @endslot
                    @slot('boxTitle')
                        @lang('Category')
                    @endslot
                    @include('back.partials.input', [
                        'input' => [
                            'name' => 'category',
                            'values' => isset($article) ? $article->categories : collect(),
                            'input' => 'categories',
                            'options' => $categories,
                        ],
                    ])
                @endcomponent
         
                <!-- Tags -->
                @component('back.components.box')
                    @slot('type')
                        box-warning
                    @endslot
                    @slot('boxTitle')
                        @lang('Tags')
                    @endslot
                    @include('back.partials.input', [
                        'input' => [
                            'name' => 'tags',
                            'values' => isset($article) ? $article->tags : collect(),
                            'input' => 'tags',
                            'options' => $tags,
                        ],
                    ])
                @endcomponent

                @component('back.components.box')
                    @slot('type')
                        danger
                    @endslot
                    @slot('boxTitle')
                        @lang('Tags')
                    @endslot
                    @include('back.partials.input', [
                        'input' => [
                            'name' => 'tags',
                            'value' => isset($article) ? implode(',', $article->tags->pluck('tag')->toArray()) : '',
                            'input' => 'text',
                            'required' => false,
                        ],
                    ])
                @endcomponent

                @component('back.components.box')
                    @slot('type')
                        primary
                    @endslot
                    @slot('boxTitle')
                        @lang('Image')
                    @endslot
                    <img id="img" src="@isset($article) {{ $article->image }} @endisset" alt="" class="img-responsive">
                    @slot('footer')
                        <div class="{{ $errors->has('image') ? 'has-error' : '' }}">
                            <div class="input-group">
                                <div class="input-group-btn">
                                    <a href="" class="popup_selector btn btn-primary" data-inputid="image">@lang('Select an image')</a>
                                </div>
                                <!-- /btn-group -->
                                <input class="form-control" type="text" id="image" name="image" value="{{ old('image', isset($article) ? $article->image : '') }}">
                            </div>
                            {!! $errors->first('image', '<span class="help-block">:message</span>') !!}
                        </div>
                    @endslot
                @endcomponent

        </div>
        </div>
        <!-- /.row -->
    </form>

@endsection

@section('js')

    <script src="{{ asset('adminlte/plugins/colorbox/jquery.colorbox-min.js') }}"></script>
    <script src="{{ asset('adminlte/plugins/voca/voca.min.js') }}"></script>
    <script src="{{ asset('adminlte/plugins/select2/select2.full.min.js') }}"></script>
    <script src="https://cdn.ckeditor.com/4.7.3/standard/ckeditor.js"></script> 
    <script src="{{ asset('adminlte/plugins/iCheck/icheck.min.js') }}"></script>
    
    <!-- Flat red color scheme for iCheck     -->
    <script>
      $('input[type="checkbox"].icheckbox_flat-blue').iCheck({
        checkboxClass: 'icheckbox_flat-blue',
      });
    </script>
    
    <script>
       //Initialize Select2 Elements
       $('.select2').select2();

    </script> 
    <script>

        CKEDITOR.replace('body', {customConfig: '/adminlte/js/ckeditor.js'})

        $('.popup_selector').click( function (event) {
            event.preventDefault()
            var updateID = $(this).attr('data-inputid')
            var elfinderUrl = '/elfinder/popup/'
            var triggerUrl = elfinderUrl + updateID
            $.colorbox({
                href: triggerUrl,
                fastIframe: true,
                iframe: true,
                width: '70%',
                height: '70%'
            })
        })

        function processSelectedFile(filePath, requestingField) {
            $('#' + requestingField).val('\\' + filePath)
            $('#img').attr('src', '\\' + filePath)
        }

        $('#slug').keyup(function () {
            $(this).val(v.slugify($(this).val()))
        })

        $('#title').keyup(function () {
            $('#slug').val(v.slugify($(this).val()))
        })

    </script>

@endsection