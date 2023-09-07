<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('tags')->insert([
            'id' => 1,
            'name' => 'Hot',
            'color' => '#f44336',
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('tags')->insert([
            'id' => 2,
            'name' => 'Trending',
            'color' => 'var(--dropdown_hover)',
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('tags')->insert([
            'id' => 3,
            'name' => 'New',
            'color' => '#00bcd4',
            'created_at' => now(),
            'updated_at' => now()
        ]);

    }
}
