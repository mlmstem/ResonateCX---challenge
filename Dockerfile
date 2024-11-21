# Use an official lightweight Node.js image with Alpine
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Install build tools for any potential native dependencies
RUN apk add --no-cache python3 make g++

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the container
COPY . .

# Expose the Vite default development port
EXPOSE 5173

# Set the command to start the Vite development server
CMD ["npm", "run", "dev", "--", "--host"]


