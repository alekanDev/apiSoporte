# Indica que se tomara una imagen llamada node (dockerHub)
FROM node:latest

# Instalacion de la version de npm
RUN npm install -g npm@9.1.2

# RUN se utiliza para correr comandos linux, -p se utiliza para que creen los directorios en caso de que no existan
RUN mkdir -p /usr/src/app

# WORKDIR indica cual sera el directorio en el que se va a trabajar
WORKDIR /usr/src/app

#COPY se realiza el copiado de los ficheros necesarios para la construcción de la app
COPY package*.json ./

# Se corre npm install para instalar los paquenes necesarios
RUN npm install

# COPY se indica que se copiara toda la información del directorio raiz al directorio del contenedor (WORKDIR) 
COPY . .

# EXPOSE informa el puerto que va a exponerse por la app
EXPOSE 5000

#CMD se realizan la ejecución del comando para el inicio de la app
CMD [ "npm", "run", "dev"] 