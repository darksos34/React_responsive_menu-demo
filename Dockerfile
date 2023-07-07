FROM node:18.16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8083

CMD [ "npm", "start" ]
#RUN mkdir -p /React_responsive_menu-dem/src/app
#WORKDIR /React_responsive_menu-demo/src/app
#
## Install app dependencies
#COPY package.json /React_responsive_menu-demo/src/app/
#RUN npm install
#
## Bundle app source
#COPY . /React_responsive_menu-demo/src/app
#
#EXPOSE 3000
#CMD [ "npm", "start" ]
