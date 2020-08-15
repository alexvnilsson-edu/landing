FROM node:12

RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

ADD package.json /app/
RUN npm install --silent

COPY . /app/

CMD [ "bin/start" ]

EXPOSE 8000
