FROM node:16

WORKDIR /usr/src/app

# Dont skip this step. It is for caching.
#COPY package*.json ./

#RUN npm install

#COPY . .

#RUN npm run build

EXPOSE 3001

CMD tail -f /dev/null

#CMD ["npm", "start"]