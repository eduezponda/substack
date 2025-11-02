## 🛡️ Docker en modo Rootless

Docker está configurado en **modo rootless** para mejorar la seguridad del sistema. Esto permite ejecutar Docker sin privilegios de administrador y evita que los contenedores tengan acceso directo al sistema host.

### Ventajas

- ✅ No requiere `sudo` para ejecutar comandos Docker
- ✅ Mayor aislamiento de procesos del sistema
- ✅ Ideal para entornos de desarrollo con WSL2

### Configuración inicial

#### 1. Instalar dependencias necesarias

```bash
sudo apt install -y uidmap dbus-user-session
```

#### 2. Detener y deshabilitar el Docker del sistema

```bash
sudo systemctl stop docker.socket
sudo systemctl stop docker
sudo systemctl disable docker.socket
sudo systemctl disable docker
sudo rm -f /var/run/docker.sock
```

#### 3. Activar el modo rootless

```bash
dockerd-rootless-setuptool.sh install
```

#### 4. Iniciar el servicio Docker del usuario

```bash
systemctl --user start docker
```

#### 5. Configurar la variable de entorno

```bash
echo 'export DOCKER_HOST=unix:///run/user/$(id -u)/docker.sock' >> ~/.bashrc
source ~/.bashrc
```

> 💡 Esto permite que los comandos `docker` usen el demonio rootless en lugar del global.

#### 6. Verificar la configuración

```bash
docker info | grep -i rootless
```

Si aparece `rootless` en la sección **Security Options**, la configuración es correcta.

### Uso diario

Con esta configuración, todos los comandos Docker funcionan normalmente sin necesidad de `sudo`:

```bash
docker compose up --build
docker ps
docker logs -f container_name
```