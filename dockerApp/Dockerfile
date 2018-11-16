FROM mhart/alpine-node

WORKDIR /usr/scr/app

COPY package.json .

RUN yarn

COPY . .

EXPOSE 8080

CMD ["yarn","start"]
