<?php
namespace App\Handlers;

use Illuminate\Support\Facades\Storage;

class elFinderCallback {
  
    public function changeUploadPath(&$path, &$name, $tmpname, $volume) {
      $tmppath = date("Y/m");
      Storage::makeDirectory('uploads/'.$tmppath);
      $path = 'l1_' . rtrim(strtr(base64_encode($tmppath), '+/=', '-_.'), '.');
    }
  
  
}

?>