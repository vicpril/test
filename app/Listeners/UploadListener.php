<?php

namespace App\Listeners;

use Unisharp\Laravelfilemanager\Events\ImageWasUploaded;

class UploadListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(ImageWasUploaded $event)
    {
        // dd($event);
    }
}
