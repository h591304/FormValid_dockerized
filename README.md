# Repository for docker projects

Dockerhub repo: https://hub.docker.com/u/alphanadir

## PHP Installation (windows):

Install PHP at https://www.php.net/downloads by downloading the latest version and proceed through the installation process. Make sure to add the bin directory of the installation location to environment path. Now we can check if the installation was successfull by opening cmd and entering the following commandline:
```php -v``` or ```php --version```. In addition php.ini file is needed to enable the mysqli extension for db access. On windows, copy the php.ini-development or php.ini-production and rename to php.ini. Open the file cntrl + F, search "extension" and remove ; before extension=mysqli and save. Also change extension_dir to the location of .dll files in your php installation. (extension_dir = "C:\php-8.3.4\ext" for me).

## MySQL Installation:

Install MySQL at https://dev.mysql.com/downloads/installer/ by selecting version and os and click download, then proceed through the installation process and add workbench application along the way. 

# Docker installation: 

Can be found at docker hub.

# VSCode Extensions

Practical extensions I used for this project: PHP Intelephense, PHP IntelliSense, PHP Server, open in browser and Docker.

# Instructions

1. First building Docker containers is needed from dockerfiles where the environments, configs, libraries and installations are defined. The following commandline can be used to do this: ```docker-compose up --build```.
2. If we need to change some of the configurations, the commandline ```docker-compose down``` works fine to delete the containers -> make config changes -> repeat step 1 to create new container. Docker desktop should now contain the containers: ![Docker hub containers](containers.png)

3. Running the application at localhost:8080 
