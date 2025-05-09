ARG NODE_VERSION=20.17.0
FROM node:${NODE_VERSION}-slim

ARG PORT=3000
ENV NODE_ENV=development


WORKDIR /src

COPY package*.json ./
COPY . .

RUN apt-get  update && apt-get install -y  curl  wget
RUN npm i -g sharp-cli

RUN yarn install --ignore-engines
RUN yarn install --dev --ignore-engines
RUN yarn  prepare

RUN yarn build

RUN ls

ENV PORT=${PORT}
EXPOSE ${PORT}

CMD [ "node", ".output/server/index.mjs" ]
# CMD [ "npm" ,"run", "dev" ]
