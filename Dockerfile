FROM node:22-alpine

# one by one:-
# COPY server.js /home/app/server.js

WORKDIR /app

COPY package*.json ./
RUN npm install

# all at once:-
COPY . .

EXPOSE 9000

CMD ["node", "server"]