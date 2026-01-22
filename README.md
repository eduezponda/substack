# 🧱 Proyecto Fullstack: Django + React

Este proyecto combina **Django REST Framework** en el backend con **React + TypeScript** en el frontend, utilizando **Vite** como bundler y **shadcn/ui** para la interfaz. Ambos entornos están completamente aislados mediante **Docker** y gestionados desde **WSL2** en Windows.

---

## 📋 Tabla de contenidos

- [Stack técnico](#-stack-técnico)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Configuración inicial](#-configuración-inicial)
  - [Backend (Django)](#1-backend-django)
  - [Frontend (React + Vite)](#2-frontend-react--vite)
  - [Docker](#3-docker)
- [Comandos útiles](#-comandos-útiles)
- [Control de versiones](#-control-de-versiones)

---

## 🚀 Stack técnico

| Componente | Tecnología | Descripción |
|------------|------------|-------------|
| **Lenguaje** | Python 3.11 + TypeScript | Backend + Frontend |
| **Backend** | Django 5 + Django REST Framework | API REST |
| **Frontend** | React 19 + Vite + shadcn/ui | Interfaz moderna |
| **Gestión de dependencias** | Poetry (Python) + npm (Node) | Entornos separados |
| **Virtualización** | Docker Desktop + WSL2 | Aislamiento completo |
| **Versiones de Python** | pyenv | Gestión de múltiples versiones |
| **Control de versiones** | Git + GitHub | Versionado del código |
| **Base de datos (dev)** | SQLite | Simple y sin configuración |

---

## 📁 Estructura del proyecto

```
codigo/
├── backend/
│   ├── substack_backend/
│   ├── pyproject.toml
│   ├── manage.py
│   └── Dockerfile
├── frontend/
│   ├── src/
│   ├── package.json
│   ├── vite.config.ts
│   └── Dockerfile
└── docker-compose.yml
```

---

## ⚙️ Configuración inicial

### 1. Backend (Django)

#### 1.1. Crear el proyecto

```bash
# Crear proyecto con Poetry
poetry new backend
cd backend

# Configurar versión de Python
pyenv local 3.11.0
poetry env use 3.11.0

# Instalar dependencias
poetry add django djangorestframework django-cors-headers

# Crear proyecto Django
poetry run django-admin startproject substack_backend .

# Ejecutar servidor de desarrollo
poetry run python manage.py runserver
```

#### 1.2. Configurar Django (`settings.py`)

```python
INSTALLED_APPS = [
    # ...
    "rest_framework",
    "corsheaders",
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    # ...
]

# Solo para desarrollo - ajustar en producción
CORS_ALLOW_ALL_ORIGINS = True
```

> 💡 **django-cors-headers** permite que el frontend se comunique con el backend durante el desarrollo sin bloquear las peticiones de origen cruzado.

#### 1.3. Activar entorno virtual automáticamente con direnv

**Instalar direnv** (si no lo tienes):

```bash
# En Ubuntu/WSL
sudo apt install direnv

# Añadir a ~/.bashrc o ~/.zshrc
eval "$(direnv hook bash)"  # o zsh
```

**Crear archivo `.envrc` en la carpeta backend:**

```bash
source $(poetry env info --path)/bin/activate
```

**Autorizarlo:**

```bash
direnv allow
```

Ahora el entorno virtual se activa automáticamente al entrar en `backend/`.

---

### 2. Frontend (React + Vite)

#### 2.1. Crear el proyecto

```bash
# Crear proyecto Vite con React y TypeScript
npx create-vite frontend --template react-ts
cd frontend
npm install
```

#### 2.2. Instalar Tailwind CSS

```bash
# Instalar dependencias
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Configurar `tailwind.config.js`:**

```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

**Añadir directivas en `src/index.css`:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Importar en `src/main.tsx`:**

```typescript
import './index.css';
```

#### 2.3. Instalar shadcn/ui

```bash
npx shadcn@latest init
```

Esto configura automáticamente shadcn/ui sobre Tailwind CSS para usar componentes UI modernos.

**Ejemplo de instalación de componentes:**

```bash
npx shadcn@latest add button
npx shadcn@latest add sheet
```

---

### 3. Docker

#### 3.1. Instalación

1. Descargar **Docker Desktop** para Windows
2. Durante la instalación:
   - ✅ **Use WSL 2 instead of Hyper-V**
   - ❌ **Allow Windows Containers** (desmarcar)

#### 3.2. Verificar instalación

```bash
docker --version
docker compose version
wsl --list --verbose  # Debe mostrar Ubuntu en versión 2
```

#### 3.3. Ejecutar el proyecto

```bash
# Desde la raíz del proyecto
docker compose up --build
```

Esto levanta tanto el backend (Django) como el frontend (Vite) en contenedores separados con sus dependencias completamente aisladas.

---

## 🛠️ Comandos útiles

### Backend (Django)

```bash
# Activar entorno virtual (manual)
source $(poetry env info --path)/bin/activate

# Ejecutar migraciones
poetry run python manage.py migrate

# Crear superusuario
poetry run python manage.py createsuperuser

# Ejecutar servidor
poetry run python manage.py runserver
```

### Frontend (React + Vite)

```bash
# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Vista previa del build
npm run preview
```

### Docker

```bash
# Levantar contenedores
docker compose up

# Levantar con rebuild
docker compose up --build

# Detener contenedores
docker compose down

# Ver logs
docker compose logs -f

# Ejecutar comandos en contenedor
docker compose exec backend python manage.py migrate
```

---

## 🔄 Control de versiones

### Configuración inicial

```bash
# Inicializar repositorio
git init

# Añadir archivos
git add .

# Primer commit
git commit -m "Initial commit"

# Vincular con repositorio remoto
git remote add origin https://github.com/tu-usuario/tu-repo.git

# Push inicial (vincula rama local con remota)
git push -u origin main
```

> 💡 El flag `-u` vincula la rama local `main` con la remota para futuros `git push`.

---

## 📝 Notas adicionales

- **Entorno de desarrollo**: Todo configurado para desarrollo local con hot-reload tanto en Django como en Vite
- **Producción**: Ajustar `CORS_ALLOW_ALL_ORIGINS` y otras configuraciones de seguridad en Django
- **Base de datos**: SQLite por defecto, cambiar a PostgreSQL para producción
- **Variables de entorno**: Usar archivos `.env` para configuraciones sensibles (no incluir en Git)

---

## 🎯 Resultado final

Un entorno de desarrollo moderno, aislado y reproducible que integra Django y React bajo Docker, optimizado para desarrollo profesional y escalabilidad futura.
