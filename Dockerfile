#Serve the app with NGINX
FROM nginx:alpine

# Copy the build files from the dist folder to /usr/share/nginx/html
COPY build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the desired port (default is 80 for NGINX)
EXPOSE 3000

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
