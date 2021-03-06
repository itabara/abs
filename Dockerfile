FROM node:8-alpine

# Update
RUN apk add --update bash

# Global install yarn package manager
RUN npm set progress=false && \
    npm install -g --progress=false yarn

ARG project_name

# Create app directory
RUN mkdir -p /usr/src/$project_name
WORKDIR /usr/src/$project_name

# copy package.json to container
COPY package.json /usr/src/$project_name/package.json
RUN yarn install
COPY ./ /usr/src/$project_name/

ENV NODE_ENV production

EXPOSE 3000

CMD ["npm", "start"]
