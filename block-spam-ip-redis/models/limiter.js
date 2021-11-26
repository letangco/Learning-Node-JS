const client = require('../helpers/init_redis');

const incr = async (key) => {
  return await client.incr(key);
};


const redisExpire = async (key, time) => {
  return await client.expire(key, time)
};

const thoigianConlai = async (key) => {
  return await client.ttl(key);
}

const getByKey = async (key) => {
  return await client.get(key);
};

const setTextByKey = async (key, time, data) => {
  return await client.setEx(key, time, data);
};

module.exports = {
  incr, redisExpire, thoigianConlai, getByKey, setTextByKey
};
