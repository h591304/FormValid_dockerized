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
2. If we need to change some of the configurations, the commandline ```docker-compose down``` works can be used to delete the containers -> make config changes -> repeat step 1 to create new container. Docker desktop should now contain the following containers: ![containers](https://github.com/h591304/FormValid_dockerized/assets/61086707/1eaa1303-4e98-4228-be14-b42306b910eb)
4. Running the application at localhost:8080 should provide you with this page where you can enter your information: ![FormValidation](https://github.com/h591304/FormValid_dockerized/assets/61086707/6a6d0117-16db-4be5-8e4a-95451dbe1688)
5. When submitting this information, a new entry will show up in mySql database: ![mysqlinfo](https://github.com/h591304/FormValid_dockerized/assets/61086707/41ae385c-1a83-41c9-bc13-b7ceb984703f)
