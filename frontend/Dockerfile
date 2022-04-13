# Create image based off of the official Node 10 image
FROM node:16-alpine as builder
COPY package.json package-lock.json ./
RUN npm set strict-ssl false
RUN npm ci && mkdir /app && mv ./node_modules ./app
WORKDIR /app
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist/frontend /usr/share/nginx/html
EXPOSE 80