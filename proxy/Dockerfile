FROM nginx

RUN rm -v /etc/nginx/nginx.conf
ADD nginx.conf /etc/nginx/
ADD proxy_params /etc/nginx/

WORKDIR /root

EXPOSE 80

CMD service nginx start
