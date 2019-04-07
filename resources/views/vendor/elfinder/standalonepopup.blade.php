<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <title>elFinder 2.0</title>

        <!-- jQuery and jQuery UI (REQUIRED) -->
        <link rel="stylesheet" type="text/css" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.8.23/themes/smoothness/jquery-ui.css">
        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>

        <!-- elFinder CSS (REQUIRED) -->
        <link rel="stylesheet" type="text/css" href="{{ asset($dir . '/css/elfinder.min.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset($dir . '/css/theme.css') }}">
        <!-- <link rel="stylesheet" type="text/css" href="{{ asset($dir . '/css/themes/windows-10/css/theme.css') }}"> -->


        <!-- elFinder JS (REQUIRED) -->
        <script src="{{ asset($dir . '/js/elfinder.min.js') }}"></script>

        @if($locale)
            <!-- elFinder translation (OPTIONAL) -->
            <script src="{{ asset($dir . "/js/i18n/elfinder.$locale.js") }}"></script>
        @endif
        <!-- Include jQuery, jQuery UI, elFinder (REQUIRED) -->

        <script type="text/javascript">
            $().ready(function () {
                var elf = $('#elfinder').elfinder({
                    // set your elFinder options here
                    @if($locale)
                        lang: '{{ $locale }}', // locale
                    @endif
                    customData: { 
                        _token: '{{ csrf_token() }}'
                    },
                    url: '{{ route("elfinder.connector") }}',  // connector URL
                    soundPath: '{{ asset($dir.'/sounds') }}',
                    dialog: {width: 900, modal: true, title: 'Select a file'},
                    resizable: false,
                    commandsOptions: {
                        getfile: {
                            oncomplete: 'destroy'
                        }
                    },
                    getFileCallback: function (file) {
                        window.parent.processSelectedFile(file.path, '{{ $input_id  }}');
                        parent.jQuery.colorbox.close();
                    },
                      
                    // custom
                    @if(request()->get("target"))
                        startPathHash: '{{ request()->get("target") }}',
                    @endif
                    handlers : {
                        upload : function(event, instance) {
                            const phash = event.data.added[event.data.added.length - 1].phash;
                            instance.exec('open', phash);
                        }
                    },
                    sortType: 'date',
                    sortOrder: 'desc',
                    uiOptions: {
                        // toolbar configuration
                        toolbar: [
                            ['back', 'forward', 'up'],
                            ['mkdir', 'upload'],
  //                           ['open', 'download', 'getfile'],
  //                           ['undo', 'redo'],
                            ['copy', 'cut', 'paste'],
  //                           ['duplicate', 'rename', 'edit', 'resize', 'chmod'],
  //                           ['selectall', 'selectnone', 'selectinvert'],
                            ['quicklook', 'info'],
  //                           ['extract', 'archive'],
                            ['search'],
                            ['view', 'sort'],
                            ['fullscreen']
                        ]
                    },
                }).elfinder('instance');
            });
        </script>

    </head>
    <body>

        <!-- Element where elFinder will be created (REQUIRED) -->
        <div id="elfinder"></div>

    </body>
</html>
