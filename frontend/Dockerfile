FROM node:23-alpine AS build

WORKDIR /app

COPY package*.json .

ARG VITE_BACKEND_URL
RUN echo VITE_BACKEND_URL
ENV VITE_BACKEND_URL=http://localhost:8001

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]