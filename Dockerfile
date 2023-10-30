# start image with offical node image
FROM node:18.15.0

RUN npm install -g create-react-app
RUN npm install -g react-scripts
RUN npm install -g react

# cd to app directory (define a working directory)
WORKDIR /app

# copy package dependencies
COPY package*.json /app
# copy .lock file - for use of npm commands
COPY package-lock.json /app

# install npm modules
RUN npm install

ENV NODE_PATH=/app/node_modules/.bin

#  copy source code
COPY . /app

# build project and create build directory
# RUN npm run build

# expose port to run on
EXPOSE 3000

# execute npm start
CMD ["npm", "start"]