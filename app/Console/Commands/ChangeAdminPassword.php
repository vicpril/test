<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class ChangeAdminPassword extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'changeAdminPassword {--user=admin}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Change Admin`s or Redac`s password';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
      
        $user = User::where('alias', $this->option('user'))->first();
        if (!$user) {
            $this->error('User with inputed alias is not found.');
            die();
        }
//         $this->info("$user->id $user->email $user->alias $user->role");
      
        if ($user->role !== 'admin' && $user->role !== 'redac') {
            $this->error('User`s role is not `admin` or `redac`');
            die();
        }
      
        $this->info("User is found.");
      
        $password = $this->secret("Type new password:");
        $user->password = Hash::make($password);
        $user->save();
      
        $this->info("Password was changed successfully!");
        
    }
}
