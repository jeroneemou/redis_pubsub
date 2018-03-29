const Redis = require("redis")

const redisClient = Redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
})

redisClient.publish(process.env.CHANNEL, JSON.stringify(process.argv))
redisClient.quit()


