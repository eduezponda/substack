# Imagen base con Node 20
FROM node:20-alpine

# Establece directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto que usa Vite
EXPOSE 5173

# Comando por defecto (modo desarrollo)
CMD ["npm", "run", "dev", "--", "--host"]
