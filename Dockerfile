FROM node

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY app/package.json .

RUN yarn install

EXPOSE 3000

CMD [ "node", "src/server.js" ]


