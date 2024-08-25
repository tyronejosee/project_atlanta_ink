# Portfolio API

The JSON used as the database is located in `app/data/db.py`

## Requirements

- Python 3.7+

## Installation

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/usuario/nombre-del-repositorio.git
cd nombre-del-repositorio
```

### Virtual Environment Setup

It is recommended to create a virtual environment to isolate all the project dependencies:

```bash
# Linux
python3 -m venv env

# Windows
python -m venv env
```

Activate the virtual environment:

```bash
# Linux
source venv/bin/activate

# Windows
venv\Scripts\activate
```

### Installing Dependencies

You can install the dependencies using `pip` or `Poetry`.

#### pip

```bash
pip install -r requirements.txt
```

#### Poetry

```bash
poetry install
```

## Running the Application

To run the application in development mode, use:

```bash
uvicorn app.main:app --reload
```

This will start the server at `http://127.0.0.1:8000`.

### API Documentation

Once the application is running, you can access the interactive documentation at:

- Swagger UI: `http://127.0.0.1:8000/docs`
- Redoc: `http://127.0.0.1:8000/redoc`
