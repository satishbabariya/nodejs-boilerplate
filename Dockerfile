FROM node:alpine

# Create work directory
WORKDIR /usr/src/app

# Install runtime dependencies
RUN npm install yarn -g
RUN npm install typescript -g

# Copy app source to work directory
COPY . /usr/src/app

# Install app dependencies
RUN yarn install

# Build
RUN yarn build

EXPOSE 3000
CMD node dist/main.js
