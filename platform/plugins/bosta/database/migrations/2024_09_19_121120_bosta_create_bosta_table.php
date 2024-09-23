<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    public function up(): void
    {
        Schema::create('bostas', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->string('status', 60)->default('published');
            $table->timestamps();
        });

        Schema::create('bostas_translations', function (Blueprint $table) {
            $table->string('lang_code');
            $table->foreignId('bostas_id');
            $table->string('name', 255)->nullable();

            $table->primary(['lang_code', 'bostas_id'], 'bostas_translations_primary');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bostas');
        Schema::dropIfExists('bostas_translations');
    }
};
