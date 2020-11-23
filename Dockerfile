FROM node:14
WORKDIR /chicksgold-crypto-bot
COPY package.json /chicksgold-crypto-bot
RUN npm install
COPY . /chicksgold-crypto-bot
CMD npm start