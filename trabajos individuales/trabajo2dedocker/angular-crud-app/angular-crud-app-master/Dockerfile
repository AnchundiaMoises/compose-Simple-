# Utilizamos una imagen base de Node.js
FROM node:14-alpine

# Instalamos Angular CLI de forma global
RUN npm install -g @angular/cli

# Creamos y configuramos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos el archivo package.json y el archivo package-lock.json a la imagen
COPY package*.json ./

# Instalamos las dependencias del proyecto
RUN npm install

# Copiamos todo el código fuente a la imagen
# COPY . .

EXPOSE 4200

# CMD ["ng", "serve", "--host", "0.0.0.0"]  
