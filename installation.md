# Installation of node, nginx and (for test) pm2

Install nodejs
  sudo apt install nodejs
  nano hello.js
  sudo apt install npm
  sudo npm install pm2@latest -g
  sudo apt install build-essentials

Running pm2
  pm2 start hello.js

Test:
  curl http://localhost:3001

Nginx stuff
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

# Export mysql data
Inside docker container with mysql:

mysqldump -u root -p medmcqprod > dumpXXXXXX_xxxx.sql

Outside container:

docker cp [dock_id]:/dumpXXXXXX_xxxx.sql dumpXXXXXX_xxxx.sql

Download to local computer!

# Import mysql data
On local computer, inside folder with dump:
scp -i ~/.ssh/au/medmcq_key.pem dumpXXXXXX_xxxx.sql [remoteUSER]@[remoteIP]:/home/au/dumpXXXXXX_xxxx.sql

Then on server, run:
mysql -u username -h [ip] -p medmcqprod < data-dump.sql
