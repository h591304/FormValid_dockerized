# Dockerfile.nginx
FROM nginx:1.25.4-alpine

# Copy custom Nginx config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
