# Example of Redis publish / subscribe model

## Prerequisities

1. Redis instance. Run `docker-compose up`
1. Node installed. Run `nvm use && npm install`

## Run subscriber

Run `REDIS_HOST=localhost REDIS_PORT=6379 CHANNEL=channel npm run sub`

## Run publisher

Run `REDIS_HOST=localhost REDIS_PORT=6379 CHANNEL=channel npm run pub <message>`