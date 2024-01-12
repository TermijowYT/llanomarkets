<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Deploy (develop)

## Importante!
Es necesario configurar la información que está en el .env.template en un archivo .env

Por seguridad no se puede dejar junto con los demás archivos por defecto (es solo copiar y pegar)


### 1. Instalar los paquetes de NPM
```
npm install
```
### 2. Iniciar la base de datos en docker
```
docker-compose up -d
```
### 3. Iniciar el servidor en modo de desarrollo
```
npm run start:dev
```

