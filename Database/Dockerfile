FROM mhart/alpine-node

#TODO On met quoi ici ?
WORKDIR

COPY package.json .

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]