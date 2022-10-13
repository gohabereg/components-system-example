FROM node:16-alpine AS builder

WORKDIR /var/www/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

FROM node:16-alpine AS production

WORKDIR /var/www/production

COPY --from=builder /var/www/app/package.json /var/www/app/yarn.lock ./

RUN yarn install --production

COPY --from=builder /var/www/app/dist ./dist
COPY --from=builder /var/www/app/server.js ./

EXPOSE 3000

CMD ["node", "./server.js"]
