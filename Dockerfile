# This is for single stage containerization

# Base image
FROM node:18-alpine3.18

# Create app directory
WORKDIR /usr/src/app

# Copy all packages to the application
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle the app source
COPY . .

# Expose the port
EXPOSE 3000

# Start react app 
CMD ["npm", "start"]