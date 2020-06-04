<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->seeders();
    }

    private function seeders() {
        $this->call([
            CompanySeeder::class,
            DocumentSeeder::class,
            JobOpportunitySeeder::class,
            UserSeeder::class,
        ]);
    }
}
