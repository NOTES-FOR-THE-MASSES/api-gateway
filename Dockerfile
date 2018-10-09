FROM node:10.11.0-alpine

# Set working directory for any command that follows
WORKDIR /api-gateway

COPY package*.json ./

RUN npm install

# Copy everything from the root dir to the working directory
COPY . .

CMD [ "node", "src/index.js"]