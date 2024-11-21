# Usa una imagen base de Node.js para el backend y Angular
FROM node:14

# Configura el directorio de trabajo
WORKDIR /app

# Copia los archivos de Angular
COPY ./chatfront ./chatfront

# Copia los archivos de backend
COPY ./backend ./backend

# Instala dependencias para el frontend
RUN cd ./chatfront && npm install && npm run build --prod

# Instala dependencias para el backend
RUN cd ./backend && npm install

# Expon los puertos para el servidor web y el WebSocket
EXPOSE 80 3000

# Comando para iniciar el servidor Node.js y servir la aplicación Angular
CMD ["sh", "-c", "node ./backend/server.js & npx http-server ./chatfront/dist/chatfront -p 80"]
