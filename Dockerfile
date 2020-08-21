FROM mhart/alpine-node:12

RUN mkdir /app
WORKDIR /app

ENV HOST=0.0.0.0 PORT=8000 PATH=/app/node_modules/.bin:$PATH

COPY . /app/
RUN npm ci && npm run build

CMD [ "npm", "start" ]

EXPOSE 8000
