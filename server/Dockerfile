FROM node:argon

RUN mkdir /src

RUN npm update -g
RUN npm install -g nodemon
RUN npm install

WORKDIR /src

EXPOSE 3000

CMD nodemon server.js
