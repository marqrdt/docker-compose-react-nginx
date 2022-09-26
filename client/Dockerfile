#FROM node:14.14.0-alpine as builder
FROM node:18 as builder
#WORKDIR /app
ENV NODE_OPTIONS=--openssl-legacy-provider
COPY ./package.json ./
RUN npm i
COPY . .
RUN NODE_OPTIONS=--openssl-legacy-provider; npm run build
FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
