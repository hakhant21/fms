<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ShopTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $shops = [
            [
                'name' => 'Main Street Store',
                'shop_code' => 'MS001',
                'address' => '123 Main St, Springfield',
                'image' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Downtown Outlet',
                'shop_code' => 'DO002',
                'address' => '456 Elm St, Springfield',
                'image' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Uptown Branch',
                'shop_code' => 'UB003',
                'address' => '789 Oak St, Springfield',
                'image' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        foreach ($shops as $shop) {
            DB::table('shops')->insert($shop);
        }
    }
}
