# ./docker/php/Dockerfile
FROM php:7.3-fpm

RUN docker-php-ext-install pdo_mysql

RUN pecl install apcu

RUN apt-get update && \
apt-get install -y \
zlib1g-dev wget git

RUN docker-php-ext-enable apcu

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php --filename=composer \
    && php -r "unlink('composer-setup.php');" \
    && mv composer /usr/local/bin/composer \
    && chmod +x /usr/local/bin/composer

WORKDIR /usr/src/app

ADD apps/chess /usr/src/app

EXPOSE 8080