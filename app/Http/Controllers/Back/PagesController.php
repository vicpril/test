<?php

namespace App\Http\Controllers\Back;

use App\Models\Page;
use Illuminate\Http\Request;
use App\Http\Requests\PageRequest;
use App\Repositories\PagesRepository;

class PagesController extends AdminController
{
    public function __construct(PagesRepository $p_rep)
    {
        parent::__construct();

        $this->subtitle = "Страницы";

        $this->template = env('THEME_BACK') . '.back.pages.index';

        $this->repository = $p_rep;

        $this->table = 'pages';
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->subtitle = "Страницы";

        $this->template = env('THEME_BACK') . '.back.pages.index';

        return $this->renderOutput();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->subtitle = "Новая страница";

        $this->template = env('THEME_BACK') . '.back.pages.edit';

        return $this->renderOutput();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PageRequest $request)
    {
        $result = $this->repository->create($request->except('_token', '_method'));

        if (is_array($result) && !empty($result['error'])) {
            return back()->with($result);
        }

        return redirect(route('pages.index'))->with(['message' => $result]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Page  $page
     * @return \Illuminate\Http\Response
     */
    public function show(Page $page)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Page  $page
     * @return \Illuminate\Http\Response
     */
    public function edit(Page $page)
    {
        $this->subtitle = "Редактировать страницу";

        $this->template = env('THEME_BACK') . '.back.pages.edit';

        return $this->renderOutput(['id' => $page->id]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Page  $page
     * @return \Illuminate\Http\Response
     */
    public function update(PageRequest $request, Page $page)
    {
        $result = $this->repository->update($page, $request->except('_token', '_method'));

        if (is_array($result) && !empty($result['error'])) {
            return back()->with($result);
        }

        return redirect(route('pages.index'))->with(['message' => $result]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Page  $page
     * @return \Illuminate\Http\Response
     */
    public function destroy(Page $page)
    {
        //
    }
}
