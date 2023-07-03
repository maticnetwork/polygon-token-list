#Serve the app with NGINX
FROM nginx:alpine

# Copy the build files from the dist folder to /usr/share/nginx/html
COPY dist /usr/share/nginx/html

# Expose the desired port (default is 80 for NGINX)
EXPOSE 3000

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
