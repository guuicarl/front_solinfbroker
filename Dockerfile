FROM node:16-alpine as node

WORKDIR /app

COPY package*.json ./

COPY src ./src/

COPY nginx.conf ./

COPY tailwind.config.js ./

COPY .eslintrc.js ./

COPY babel.config.js ./

COPY postcss.config.js ./

COPY public ./public/

RUN npm install -g npm@8.5.0
RUN npm install
RUN npm run build --mode=production

FROM nginx:stable-alpine as production-stage

COPY --from=node /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app/dist /usr/share/nginx/html

RUN ls /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]