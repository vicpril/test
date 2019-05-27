<?php

namespace App\Repositories;

use DB;
use App\Models\Issue;
use App\Models\Article;

class ExportRepository extends Repository
{
    protected $action;
  
    protected $filename;
    protected $temp_file_uri;
    protected $prepare;
  
    protected $dataPrepeared;
  
    public function __construct(Article $article)
    {
        $this->model = $article;
    }
    
    /*
    *     Enter method
    */
    public function exportFile($action, $data) {
        
        $this->action = $action;
      
        $this->filename = "export_{$this->action}_" . date('d-m-Y') . ".docx";
      
        $this->temp_file_uri = tempnam('','temp_file');
      
        $this->prepare = "prepareTo_{$this->action}";
      
        return $this->{$this->prepare}($data);
    }
  
  
    /*
    *   Prepare data to RINC
    */
    public function prepareTo_rinc($articles) 
    {
        $this->dataPrepeared = ['result' => date('D, d M Y H:i:s') . '<br>' . print_r($articles, true)];

        return $this;
    }
  
  
  
  
    
    public function createFile ()
    {
        if (
          !$this->dataPrepeared ||
          !$this->temp_file_uri
        ) {
            throw new Exception('Data for export is not prepared', 500);
        }
      
        // Create content
        $content = view(env('THEME_BACK') . ".back.export.{$this->action}", $this->dataPrepeared)->render();

        // Create temp file & past content
        $phpWord = new \PhpOffice\PhpWord\PhpWord();
        $section = $phpWord->addSection();
        $section->addText($content);

        // Save file
        // Saving the document as OOXML file...
        $objWriter = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord, 'Word2007');
        $objWriter->save($this->temp_file_uri);

        return $this;
    }

    public function downloadFile ()
    {
        if (
          !$this->filename ||
          !$this->temp_file_uri
        ) {
            throw new Exception('File for export is not prepared', 500);
        }
        //download code
        header('Content-Description: File Transfer');
        header("Content-Type: application/docx");//header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename='.$this->filename);
        header('Content-Transfer-Encoding: binary');
        header('Expires: 0');
        header('Content-Length: ' . filesize($this->temp_file_uri));
        readfile($this->temp_file_uri);
        unlink($this->temp_file_uri); // deletes the temporary file
        exit;
    }

}
