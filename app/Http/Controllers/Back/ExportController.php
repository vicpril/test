<?php

namespace App\Http\Controllers\Back;

use File;
use Route;
use Blade;
use Illuminate\Http\Request;
use App\Http\Requests\ExportRequest;
use App\Http\Controllers\Controller;
use App\Repositories\ExportRepository;

class ExportController extends Controller
{
    protected $repository;
    protected $action;
    protected $path;
    protected $filename;

    public function __construct(ExportRepository $e_rep)
    {
        $this->repository = $e_rep;

        $this->action = Route::current()->parameter('action');

        $this->path = ".tmp/";
        $this->filename = "export_{$this->action}_" . date('d-m-Y') . ".docx";

        $this->prepare = "prepareTo_$this->action";

    }

    public function index(ExportRequest $request)
    {
// dd($request->all());

        $data = $this->repository->{$this->prepare}($request->get('articles'));

        $this->createFile($data);
    }

    public function createFile ($data)
    {
        Blade::include(env('THEME_BACK') . ".back.export.{$this->action}._header", 'header');
        Blade::include(env('THEME_BACK') . ".back.export.{$this->action}._body", 'body');
        Blade::include(env('THEME_BACK') . ".back.export.{$this->action}._footer", 'footer');

        $content = view(env('THEME_BACK') . ".back.export.{$this->action}.index", $data)->render();

        $headers = [
            'Content-Type' => 'application/doc',
            'Content-Disposition' => "attachment; filename='{$this->filename}'"
        ];

        $phpWord = new \PhpOffice\PhpWord\PhpWord();


        $section = $phpWord->addSection();


        $description = "123123";


        $section->addText($description);


        $objWriter = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord, 'Word2007');
        try {
            $objWriter->save(public_path('helloWorld.docx'));
        } catch (Exception $e) {
        }

        return response()->download(public_path('helloWorld.docx'))->send();
        exit;


            return response()->download($this->path . $this->filename)->send()->deleteFileAfterSend();
            
        return response()->streamDownload(function () use ($content) {
            echo $content;
        }, $this->filename)->send();

        // File::put($this->path . $this->filename, $content);

        // return $this;
    }

    public function downloadFile ()
    {

        return response()->download($this->path, $this->filename)->deleteFileAfterSend(true);
    }

}
