FROM node:14.17.1-alpine3.12
WORKDIR /app/
COPY . ./
RUN npm i
RUN apk add --no-cache curl
CMD [ "npm", "run start" ]