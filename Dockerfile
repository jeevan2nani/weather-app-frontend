FROM node:18-alpine

WORKDIR /frontend

COPY --chown=node:node package*.json ./

RUN npm install

COPY --chown=node:node . .

RUN npm run build

CMD npm run dev