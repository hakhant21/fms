# Fuel Management System

## How to install
```bash

git clone https://github.com/hakhant21/fms.git

cd fms 

cp .env.example .env

# Update Database Config 
DB_DATABASE=yourdatabase
DB_USERNAME=yourusername
DB_PASSWORD=yourpassword

composer install 

php artisan key:generate

php artisan migrate:fresh --seed

pnpm install && pnpm run dev

```
