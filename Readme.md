# Somethings you need before running this project!
1. After you pull this project in your local, you may run command:
```
composer update
```
2. To get image without problem you need:
```
run "php artisan storage:link"
```
and then go to "backend-app\storage\app\public", create **images** folder to specified the directory that stores images
# Create Database
The first you need configuration **xampp** followed i guided
Then, run commands:
1. ``` php artisan migrate ```
This command is create structure of DB
2. ``` php artisan db:seed ```
This command is create sample data that you can use to implement your task
3. If you want to create a completely new database, you can run:
``` php artisan migrate:fresh ```
and then run ``` php artisan db:seed ``` again.
Or you can run both of commands by run command:
``` php artisan migrate:fresh --seed ```