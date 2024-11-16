<?php

namespace Botble\Bosta\Commands;

use Botble\Bosta\Facades\Bosta;
use Illuminate\Console\Command;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Input\InputOption;

#[AsCommand('cms:bosta:migrate', 'Migrate Bosta columns to table')]
class MigrateBostaCommand extends Command
{
    public function handle(): int
    {
        $className = str_replace('/', '\\', $this->option('class'));
        $error = true;

        // dd(Bosta::supportedModels());
        if (! $className) {
            foreach (Bosta::supportedModels() as $className) {
                $this->runSchema($className);
                $error = false;
            }
        } elseif (Bosta::isSupported($className)) {
            $this->runSchema($className);
            $error = false;
        }

        if ($error) {
            $this->error('Not supported model');
        } else {
            $this->info('Migrate Bosta successfully!');
        }

        return self::SUCCESS;
    }

    public function runSchema(string $className): void
    {
        $model = new $className();
        Schema::connection($model->getConnectionName())->table(
            $model->getTable(),
            function (Blueprint $table) use ($className) {
                $table->Bosta($className);
            }
        );
    }

    protected function configure(): void
    {
        $this->addOption('class', null, InputOption::VALUE_REQUIRED, 'The model class name');
    }
}
