<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TodoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $todos = [
            ['title' => 'Music', 'completed' => 0],
            ['title' => 'Running', 'completed' => 1],
            ['title' => 'Learning React', 'completed' => 1],
            ['title' => 'Learning Next', 'completed' => 0],
            ['title' => 'Swimming', 'completed' => 0],
        ];
        foreach ($todos as $todo) {
            DB::table('todos')->insert([
                'title' => $todo['title'],
                'completed' => $todo['completed'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
    }
}
