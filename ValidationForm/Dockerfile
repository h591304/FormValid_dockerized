# Starts dockerfile by using the FROM instruction followed by nginx as base image : specified version(found at dockerhub).
FROM nginx:1.25.4-alpine

# Remove default nginx assets
RUN rm -rf /usr/share/nginx/html*

# Copies all source files to nginx defult directory when building docker image
COPY src /usr/share/nginx/html

EXPOSE 80

# Starts when container starts
CMD ["nginx", "-g", "daemon off;"]