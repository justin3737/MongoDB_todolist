const { headers } = require("./libs");
const Todo = require("./models/todo");

/** 成功
 * @param res requestListener 的 res
 */

const successHandler = async(res) => {
  const result = await Todo.find();
  res.writeHead(200, headers);
  res.write(JSON.stringify({
    status: 'success',
    data: result
  }));
  res.end();
}


/** 失敗
 * @param res requestListener 的 res
 * @param statusCode 狀態碼
 * @param message 錯誤訊息
 */

 const errorHandler = (res, statusCode, message) => {
  res.writeHead(statusCode, headers);
  res.write(JSON.stringify({
    status: 'fail',
    message
  }));
  res.end();
}

module.exports = {
  successHandler,
  errorHandler
}