FROM node:14.16-alpine
RUN npm install -g http-server
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
RUN npm install --only=development
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "node", "dist/app.js" ]