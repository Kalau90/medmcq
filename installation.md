# Installation of node, nginx and (for test) pm2
sudo apt install nodejs

nano hello.js

sudo apt install npm

sudo npm install pm2@latest -g

sudo apt install build-essentials

pm2 start hello.js

curl http://localhost:3001

sudo apt install nginx

sudo nano /etc/nginx/sites-available/default

sudo nginx -t

sudo systemctl restart nginx

# Make MySQL
cd

cd apps/

nano docker-compose.yml

*[content]*

sudo docker-compose up -d --build

sudo docker exec -it [id] bash

# RUN:
mysql -u root -p

> Fill the password

# INSIDE THIS, RUN:
ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass';

eller

ALTER USER 'root' IDENTIFIED BY 'MyNewPass';

FLUSH PRIVILEGES;

CREATE DATABASE medmcqprod;

SHOW DATABASES;

exit

exit

# Make SSH key
cd ~/.ssh/

ssh-keygen

cat id_rsa.pub

> And add to your GitHub-profile under Profile > Settings > SSH

# Clone and config
cd

mkdir apps

cd apps/

git clone git@github.com:Kalau90/medmcq.git

cd medmcq/

sudo apt install net-tools

ifconfig

> Find den lokale IP

nano .env.development

*[content]*

sudo docker-compose up -d --build

# To test knex connection:
sudo npm install knex mysql -g

cd server/

knex migrate:latest
