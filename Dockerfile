# Stage 1 : Build the Vite project
FROM node:22.4.0 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the app for production
RUN npm run build


# Stage 2 : Serve the built files using NGINX
FROM nginx:1.28.0-alpine-slim

# Copy the built files from the builder stage to NGINX's default directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Run NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]