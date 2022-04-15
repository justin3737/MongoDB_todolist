const http = require('http');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const libs = require('./libs');
const { errorHandler } = require('./responseHandler');
const { getTodo, getTodos } = require('./getTodo');

// 全域變數套件設定
dotenv.config({ path: "./config.env" })

// 本地連線
//mongoose.connect('mongodb://localhost:27017/hotel')

// 遠端資料庫
mongoose.connect(
    process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD))
  .then(() => {
    console.log('資料庫連線成功')
  })
  .catch((error) => {
    console.log(error);
  });



const requestListenet = (req, res) => {
  const { headers, message } = libs;
  const { url, method } = req
  const data = {
    /** requestListener req */
    req,
    /** requestListener res */
    res
  }

  if (method === 'GET' && url === '/todos') {
    getTodos(data);
  } else if (method === 'OPTIONS') {
    res.writeHead(200, headers)
    res.end();
  } else {
    errorHandler(res, 404, message[404]);
  }

}

const server = http.createServer(requestListenet);
server.listen(process.env.PORT | 3000);