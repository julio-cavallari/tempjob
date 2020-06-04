<?php

use Illuminate\Database\Seeder;
use App\Models\Document;

class DocumentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){

        $documents = [
            "Certificado de conclusão de curso",
            "Currículo",
            "Carta de recomendação"
        ];

        foreach ($documents as $document) {
            Document::create(["name" => $document]);
        }
    }
}
