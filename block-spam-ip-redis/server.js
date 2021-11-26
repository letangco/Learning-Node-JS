const express = require("express");
const axios = require("axios");

const PORT = process.env.PORT || 3000;

const app = express();

const { incr, redisExpire, thoigianConlai, getByKey, setTextByKey } = require('./models/limiter');

app.get("/fetch-api-async", async (req, res, next) => {
  const fetchAPIKey = 'fetchAPIKey';
  const dataRedis = await getByKey(fetchAPIKey);
  if (dataRedis) {
    const timeEx = await thoigianConlai(fetchAPIKey);
    res.json({
      status: "success",
      timeEx,
      data: JSON.parse(dataRedis),
    });
  } else {
    const data = await axios.get("https://api.publicapis.org/entries");
    const stringData = JSON.stringify(data.data);
    await setTextByKey(fetchAPIKey, 60, stringData);
    res.json({
      status: "success",
      timeEx: 60,
      data: data.data,
    });
  }
});

app.get("/api",async (req, res, next) => {
  try {
    // Get ip client khi request
    const getIPUser = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const numRequest = await incr(getIPUser);
    let _ttl;
    if (numRequest === 1) {
      await redisExpire(getIPUser, 60);
      _ttl = 60;
    } else {
      _ttl = await thoigianConlai(getIPUser);
    }

    if (numRequest > 10) {
      res.json({
        status: "error",
        numRequest,
        _ttl,
        message: "Server is busy.",
        getIPUser
      });
    }
    res.json({
      status: "success",
      numRequest,
      _ttl,
      getIPUser
    });
  } catch (error) {
    throw new Error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running is port: ${PORT}`);
});
