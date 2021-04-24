FROM node:lts-alpine3.13

RUN apk update && apk upgrade && apk add \
    git 

RUN mkdir /code && \
    cd /code && \
    git clone https://github.com/zaleskix/books_reviews_app_client.git . && \
    npm install

EXPOSE 3000

WORKDIR /code

CMD npm start