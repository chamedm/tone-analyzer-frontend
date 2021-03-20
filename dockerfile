# creamos una variable
ARG PORT=8080
# traemos la imagen de node 12 con kernel de alpine
FROM node:14
# label para agregar metadatos
LABEL autor="Mariana Chavez Medina"
# cremos el directorio de la app
WORKDIR /usr/src/app
# copiamos el archivo a nuestra carpeta 
COPY package*.json ./
# instalamos las dependencias
RUN npm install
# copiamos todo al directorio de trabajo
COPY . .
# exponemos el puerto
EXPOSE ${PORT}
# corremos el comando para nuestra app
CMD ["node", "app.js"] 