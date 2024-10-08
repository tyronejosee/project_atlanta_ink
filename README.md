<div align="center">
  <a href="https://github.com/tyronejosee/project_new_store#gh-light-mode-only" target="_blank">
    <img src="./.github/logo_color.svg" alt="logo-light" width="80">
  </a>
  <a href="https://github.com/tyronejosee/project_new_store#gh-dark-mode-only" target="_blank">
    <img src="./.github/logo_color.svg" alt="logo-dark" width="80">
  </a>
</div>
<div align="center">
  <h1><strong>Atlanta Ink - Tattoo Studio</strong></h1>
  <a href="https://atlanta-ink-studio.vercel.app/"><strong>Deploy on Vercel</strong></a>
</div>
<p align="center">
Atlanta Ink - Tattoo Studio: Hybrid web system developed with Next.js on the frontend and Django with Django REST Framework on the backend. It combines an optimized landing page with an interactive portfolio and an eCommerce module to showcase services and sell products in a responsive design.
<p>

<p align="center">
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/typescript-5.6-007ACC" alt="typescript-version">
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/nextjs-14.2.13-000000" alt="nextjs-version">
  </a>
  <a href="https://www.python.org/">
    <img src="https://img.shields.io/badge/python-3.11.9-3572A5" alt="python-version">
  </a>
  <a href="https://www.djangoproject.com/">
    <img src="https://img.shields.io/badge/django-5.1-092E20" alt="django-version">
  </a>
  <a href="https://www.django-rest-framework.org/">
    <img src="https://img.shields.io/badge/drf-3.15.2-A30000" alt="drf-version">
  </a>
  <a href="https://www.docker.com/">
    <img src="https://img.shields.io/badge/docker-26.0.0-0db7ed" alt="docker-version">
  </a>
    <a href="https://www.postgresql.org/">
    <img src="https://img.shields.io/badge/postgresql-16.4-336791" alt="postgresql-version">
  </a>
</p>

## 💻 General

### 🗃️ Repository

Clone the repository.

```bash
git clone git@github.com:tyronejosee/project_atlanta_ink.git
```

### 🌱 Contribute

If you would like to contribute to the project:

1. Fork the repository.
2. Create a branch with the name of your feature: `git checkout -b feature/new-feature`.
3. Make your changes and commit: `git commit -m 'feat: added new feature'`.
4. Push your changes: `git push origin feature/new-feature`.
5. Open a Pull Request and submit your changes to the `develop` branch.

### ⚖️ License

This project is under the [Creative Commons Zero v1.0 Universal](https://github.com/tyronejosee/project_atlanta_ink/blob/main/LICENSE) Licence.

## 🛠️ Backend

### ⚙️ Installation

Create a virtual environment (Optional, only if you have Python installed).

```bash
python -m venv env
```

Activate the virtual environment (Optional, only if you have Python installed).

```bash
env\Scripts\activate
```

> Notes: `(env)` will appear in your terminal input.

Install all dependencies (Optional, only if you have Python installed).

```bash
pip install -r requirements/local.txt
```

Create a copy of the `.env.example` file and rename it to `.env`.

```bash
cp .env.example .env
```

**Update the values of the environment variables (Important).**

> Note: Make sure to correctly configure your variables before building the container.

### 🐳 Docker

Build your container; it will take time the first time, as Docker needs to download all dependencies and build the image.
Use the `-d` (detached mode) flag to start your containers in the background.
Use the `--build` flag if you have changes and need to rebuild.

```bash
docker compose up
docker compose up -d
docker compose up --build
```

Stop the running containers (does not remove them).

```bash
docker compose stop
```

Start previously created and stopped containers.

```bash
docker compose start
```

Show container logs in real-time.

```bash
docker compose logs -f
```

Restart a service with issues (Replace `<service_name>`).

```bash
docker compose restart <service_name>
```

Remove your container.

```bash
docker compose down
```

### 🐍 Django

Access the `web` service console that runs Django.

```bash
docker compose exec web bash
```

Inside the Django console, create the migrations.

```bash
python manage.py makemigrations
```

Run the migrations.

```bash
python manage.py migrate
```

If you need to be more specific, use:

```bash
python manage.py migrate <app_label> <migration_name>
```

List all available migrations and their status.

```bash
python manage.py showmigrations
```

> Note: Manually create the migration if Django skips an app; this happens because Django did not find the `/migrations` folder.

Create a superuser to access the entire site without restrictions.

```bash
python manage.py createsuperuser
```

Log in to `admin`:

```bash
http://127.0.0.1:8000/admin/
```

Access Swagger or Redoc.

```bash
http://127.0.0.1:8000/api/schema/swagger/
http://127.0.0.1:8000/api/schema/redoc/
```

### 🚨 Important Notes

Check the creation of migrations before creating them.

```bash
docker compose exec web python manage.py makemigrations users
```

> Note: Checking migrations before their creation is necessary to avoid inconsistencies in user models.

### 🐘 PostgreSQL

Access the PostgreSQL console.

```bash
docker compose exec db psql -U <database_user> -d <database_name>
```

> Note: `-U` User, `-d` Database

List all the tables in the database.

```bash
\dt
```

Show the detailed structure of a specific table.

```bash
\d <table_name>
```

Create a backup of your database (Optional).

```bash
docker compose exec web python manage.py dumpdata > backup.json
```

Load the created backup if needed (Optional).

```bash
docker compose exec web python manage.py loaddata
```

## 🎨 Frontend

The front-end of the application was created with [Next.js](https://nextjs.org/) using the App Router introduced in Next.js 13 and the package manager [PNPM](https://pnpm.io/).

### ✅ Requirements

- [Node.js](https://nodejs.org/) >= 16.8.0
- [PNPM](https://pnpm.io/installation) >= 7.0

### ⚙️ Installation (Front-end)

To get started, make sure you have [PNPM](https://pnpm.io/installation) installed on your system. Then, follow these steps:

Navigate to the `frontend` folder:

```bash
cd ./backend/
```

Install the dependencies:

```bash
pnpm install
```

### Available Scripts

Start the development server at `http://localhost:3000/`

```bash
pnpm dev
```

Build the application for production.

```bash
pnpm build
```

Start the server in production mode.

```bash
pnpm start
```

Run the linter to check the code quality.

```bash
pnpm lint
```

### 📂 App Router Setup

This project uses the **App Router** from Next.js to handle routing. Page files (`page.tsx`) are placed inside folders within the `app/` directory. Example:

```bash
app/
├── page.tsx         # Main page at "/"
├── bookings/
│   └── page.tsx     # Bookings page at "/bookings"
```

You can create new routes simply by adding folders inside `app/` and adding `page.tsx` files for the views.

You can deploy this application on platforms like [Vercel](https://vercel.com/) (the recommended one for Next.js), [Netlify](https://www.netlify.com/), or any other service that supports Node.js.

Enjoy! 🎉
