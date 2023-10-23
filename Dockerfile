# start image with offical node image
FROM node:18.15.0

# cd to app directory (define a working directory)
WORKDIR /app

# copy package dependencies
COPY package*.json ./
# copy .lock file - for use of npm commands
COPY package-lock.json ./

# install npm modules
RUN npm install

#  copy source code
COPY . .

# vuild project and create build directory
RUN npm run build

# expose port to run on
EXPOSE 3000

# execute npm start
CMD ["npm", "start"]