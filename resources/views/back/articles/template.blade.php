@extends('back.layout')

@section('css')
    <style>
        textarea { resize: vertical; }
    </style>
    <!-- Colorbox -->
    <link href="{{ asset('adminlte/plugins/colorbox/colorbox.css') }}" rel="stylesheet">
    <!-- Select2 -->
    <link href="{{ asset('adminlte/plugins/select2/select2.min.css') }}" rel="stylesheet">
   
@endsection

@section('main')

    @yield('form-open')
        {{ csrf_field() }}

        <div class="row">
            <!-- MAIN PART -->
            <div class="col-md-8">
                @if (session('post-ok'))
                    @component('back.components.alert')
                        @slot('type')
                            success
                        @endslot
                        {!! session('post-ok') !!}
                    @endcomponent
                @endif
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
            <div class="col-md-4">
         
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
                        <div class="">
                        @if (isset($article))
                            <button type="delete" class="btn btn-default pull-left" style="color: red;">@lang('Delete')</button>

                            <button type="submit" class="btn btn-primary pull-right">@lang('Submit')</button>
                        @else
                            <button type="submit" class="btn btn-default pull-left" >@lang('Сохранить')</button>

                            <button type="public" class="btn btn-primary pull-right">@lang('Опубликовать')</button>
                        @endif   
                            
                        </div>
                       

                    @endslot
                    
                    

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
                        success
                    @endslot
                    @slot('boxTitle')
                        @lang('Details')
                    @endslot
                    @include('back.partials.input', [
                        'input' => [
                            'name' => 'slug',
                            'value' => isset($article) ? $article->slug : '',
                            'input' => 'text',
                            'title' => __('Slug'),
                            'required' => true,
                        ],
                    ])
                    @include('back.partials.input', [
                        'input' => [
                            'name' => 'active',
                            'value' => isset($article) ? $article->active : false,
                            'input' => 'checkbox',
                            'title' => __('Status'),
                            'label' => __('Active'),
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