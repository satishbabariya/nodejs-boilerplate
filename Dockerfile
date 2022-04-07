FROM node:16
COPY . .
RUN yarn
RUN yarn build
CMD [ "yarn", "start:prod" ]