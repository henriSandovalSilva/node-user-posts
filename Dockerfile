FROM ubuntu:latest

# DEPENDENCIES
RUN apt-get update
RUN apt-get install software-properties-common -y
RUN apt-get install -y nginx curl git && apt-get clean

# NODE
RUN curl -sL https://deb.nodesource.com/setup_12.x
RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm

# YARN
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get install -y --no-install-recommends yarn

# PM2
RUN npm install -g pm2

# NGINX
RUN rm /etc/nginx/sites-available/default
ADD ./default /etc/nginx/sites-available/default

# BUILD
# WORKDIR /var/www/html/node-user-posts/

# RUN
EXPOSE 80
CMD pm2 start /var/www/html/node-user-posts/dist/server.js && nginx -g "daemon off;"
