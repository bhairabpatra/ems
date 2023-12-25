# Use the official Node.js LTS (Long Term Support) image as the base image
FROM node:16 as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire Angular application to the working directory
COPY . .

# Build the Angular app for production with the ng build command
RUN npm run build --prod

# Use a lightweight image for serving the Angular application
FROM nginx:alpine

# Copy the built Angular app from the previous stage to the NGINX HTML directory
COPY --from=build /app/dist/* /usr/share/nginx/html/

# Expose port 80 for the NGINX server
EXPOSE 80

# Start NGINX when the container starts
CMD ["nginx", "-g", "daemon off;"]

