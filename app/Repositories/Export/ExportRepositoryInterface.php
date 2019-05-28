<?php 
namespace App\Repositories\Export;
  
interface ExportRepositoryInterface {
  
  public function initiate(String $action, Array $data);
  public function contentPrepare();
  public function createFile();
  public function downloadFile();
  
}


?>