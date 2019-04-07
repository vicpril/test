<?php
use App\Handlers\elFinderSimpleLogger;
use App\Handlers\elFinderCallback;

return array(

    /*
    |--------------------------------------------------------------------------
    | Upload dir
    |--------------------------------------------------------------------------
    |
    | The dir where to store the images (relative from public)
    |
    */
    'dir' => ['files'],

    /*
    |--------------------------------------------------------------------------
    | Filesystem disks (Flysytem)
    |--------------------------------------------------------------------------
    |
    | Define an array of Filesystem disks, which use Flysystem.
    | You can set extra options, example:
    |
    | 'my-disk' => [
    |        'URL' => url('to/disk'),
    |        'alias' => 'Local storage',
    |    ]
    */
    'disks' => [
//         'uploads'
    ],

    /*
    |--------------------------------------------------------------------------
    | Routes group config
    |--------------------------------------------------------------------------
    |
    | The default group settings for the elFinder routes.
    |
    */

    'route' => [
        'prefix' => 'elfinder',
        'middleware' => array('web', 'auth'), //Set to null to disable middleware filter
    ],

    /*
    |--------------------------------------------------------------------------
    | Access filter
    |--------------------------------------------------------------------------
    |
    | Filter callback to check the files
    |
    */

    'access' => 'Barryvdh\Elfinder\Elfinder::checkAccess',

    /*
    |--------------------------------------------------------------------------
    | Roots
    |--------------------------------------------------------------------------
    |
    | By default, the roots file is LocalFileSystem, with the above public dir.
    | If you want custom options, you can set your own roots below.
    |
    */

    'roots' => [
      [
        'driver'        => 'LocalFileSystem',           // driver for accessing file system (REQUIRED)
        'path'          =>  storage_path('app/public/uploads'),  // path to files (REQUIRED)
        
        'URL'           =>  env('APP_URL').'/storage/uploads',   // URL to files (REQUIRED)
//         'alias'         => 'First home', // The name to replace your actual path name. (OPTIONAL)
//         'accessControl' => 'access'      // disable and hide dot starting files (OPTIONAL)
      ]
    ],

    /*
    |--------------------------------------------------------------------------
    | Options
    |--------------------------------------------------------------------------
    |
    | These options are merged, together with 'roots' and passed to the Connector.
    | See https://github.com/Studio-42/elFinder/wiki/Connector-configuration-options-2.1
    |
    */

    'options' => array(
      'bind' => array(
//         'mkdir mkfile rename duplicate upload rm paste' => array(new elFinderSimpleLogger('packages/barryvdh/elfinder/log.txt'), 'log'),
        'upload.presave' => array(new elFinderCallback(), 'changeUploadPath'),

        ),
    ),
    
    /*
    |--------------------------------------------------------------------------
    | Root Options
    |--------------------------------------------------------------------------
    |
    | These options are merged, together with every root by default.
    | See https://github.com/Studio-42/elFinder/wiki/Connector-configuration-options-2.1#root-options
    |
    */
    'root_options' => array(
//       'tmbCrop' => false,
//       'uploadDeny' => array('all')
//       'uploadMaxSize' => '500K',
    //   'startPath'     =>  '/2019', 
    ),

);

