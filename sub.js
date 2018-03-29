const Redis = require("redis")

const redisClient = Redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
})

redisClient.on('error', (e) => {
    console.log(e)
})

redisClient.on('message', (channel, message) => {
    console.log(`Listening on ${channel} with message: ${message}`)
})

redisClient.subscribe(process.env.CHANNEL)

