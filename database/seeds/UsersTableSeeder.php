<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            'id' => 1,
            'name' => 'Admin',
            'email' => 'admin@material.com',
            'role_id' => 1,
            'picture' => '../material/img/faces/avatar.jpg'
        ]);

        User::factory()->create([
            'id' => 2,
            'name' => 'Creator',
            'email' => 'rajabumoshi23@gmail.com',
            'role_id' => 2,
            'picture' => '../material/img/faces/marc.jpg'
        ]);

        User::factory()->create([
            'id' => 3,
            'name' => 'Member',
            'email' => 'member@material.com',
            'role_id' => 3,
            'picture' => '../material/img/faces/card-profile1-square.jpg'
        ]);
    }
}
