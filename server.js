const http = require('http');
const mongoose = require('mongoose');
const dotenv = require('dotenv')

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
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}

const server = http.createServer(requestListenet);
server.listen(process.env.PORT | 3000);