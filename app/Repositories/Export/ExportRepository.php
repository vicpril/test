<?php

namespace App\Repositories\Export;

use DB;
use Blade;
use App\Models\Issue;
use App\Models\Article;
use App\Repositories\Export\ContentMaker;
use App\Repositories\Export\ExportRepositoryInterface;

class ExportRepository implements ExportRepositoryInterface
{
    protected $action;
    protected $data;
    protected $exporter;
  
    protected $filename;
    protected $temp_file_uri;
    protected $content;
  
    public function initiate(String $action, Array $data)
    {
        $this->action = $action;
      
        $this->data = $data;
      
        $this->exporter = ContentMaker::create($this->action, $this->data);
      
        return $this;
    }
  
    
  
    public function test() {
      dd($this->exporter->getContent());
    }
    
    /*
    *     Enter method
    */
    public function contentPrepare() {
        
        $this->filename = "export_{$this->action}_" . date('d-m-Y h:i:s') . ".doc";
      
        $this->temp_file_uri = tempnam('','temp_file');
      
        $this->content = $this->exporter->getContent();
      
        return $this;
    }
  
    
    public function createFile ()
    {
        if (
          !$this->content ||
          !$this->temp_file_uri
        ) {
            throw new Exception('Data for export is not prepared', 500);
        }
      
        file_put_contents($this->temp_file_uri, $this->content);
        
        // Create temp file & past content
//         $phpWord = new \PhpOffice\PhpWord\PhpWord();
//         $section = $phpWord->addSection();
//       \PhpOffice\PhpWord\Shared\Html::addHtml($section, $this->content);
//         $section->addText($this->content);

//         $document = new \PhpOffice\PhpWord\TemplateProcessor('../rinc.docx');
//         $document->setValue('content', $this->content);
//         $document->saveAs($this->temp_file_uri);
        // Save file
        // Saving the document as OOXML file...
//         $objWriter = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord, 'Word2007');
//         $objWriter->save($this->temp_file_uri);

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
//       header('Content-Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document');
        header("Content-Type: application/doc");//header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename='.$this->filename);
        header('Content-Transfer-Encoding: binary');
        header('Expires: 0');
        header('Content-Length: ' . filesize($this->temp_file_uri));
        readfile($this->temp_file_uri);
        unlink($this->temp_file_uri); // deletes the temporary file
        exit;
    }

}
