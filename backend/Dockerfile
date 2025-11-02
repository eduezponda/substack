# Imagen base: Python 3.11 ligera
FROM python:3.11-slim

# Variables de entorno para Python
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1

# Instala Poetry y dependencias del sistema
RUN apt-get update && apt-get install -y curl build-essential \
    && curl -sSL https://install.python-poetry.org | python3 - \
    && ln -s /root/.local/bin/poetry /usr/local/bin/poetry \
    && apt-get clean

# Crea directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY pyproject.toml ./
COPY . .

# Instala las dependencias con Poetry (sin entorno virtual)
RUN poetry config virtualenvs.create false && poetry install --no-root

# Expone el puerto de Django
EXPOSE 8000

# Comando por defecto
CMD ["poetry", "run", "python", "manage.py", "runserver", "0.0.0.0:8000"]
