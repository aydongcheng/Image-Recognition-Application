sudo apt-get update
sudo apt-get install -y apache2
sudo apt-get install -y curl
sudo cp -R ./* /var/www/
sudo rm -rf /var/www/html
sudo ln -s /var/www/ /var/www/html

sudo /etc/init.d/apache2 force-reload
sudo service apache2 restart