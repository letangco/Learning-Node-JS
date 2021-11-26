const redis = require('redis');
const PORT_REDIS = 6379;

const client = redis.createClient({
  port: PORT_REDIS,
  host: 'localhost',
});

client.on('error', (err) => console.log('Redis Client Error', err));

client.connect();
client.on('connect', () => console.log('Redis connected'));


module.exports = client;
