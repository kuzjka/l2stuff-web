FROM nginx:alpine

RUN apk --no-cache add curl

COPY dist/l2stuff-web /usr/share/nginx/html

HEALTHCHECK CMD curl -f localhost
