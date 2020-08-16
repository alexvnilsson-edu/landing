FROM mhart/alpine-node:12

RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

ADD package.json package-lock.json /app/
RUN npm ci

COPY . /app/

CMD [ "npm", "start" ]

EXPOSE 8000
