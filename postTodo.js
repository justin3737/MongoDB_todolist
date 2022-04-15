const { successHandler, errorHandler } = require("./responseHandler");
const { message } = require('./libs')
const Todo = require("./models/todo");

const postTodo = (data) => {
  const { req, res } = data;

  /** 來自http */
  let body = '';

  /** 接收資料 */
  req.on('data', (chunk) => {
    body += chunk;
  });

  /** 收完資料後 */
  req.on('end', async() => {
    const { wrongColumn, postFail } = message;
    try {
      const title = JSON.parse(body).title;
      if (title !== undefined) {
        await Todo.create(
          {
            "title": title,
          }
        );
        successHandler(res);
      } else {
        errorHandler(res, 400, wrongColumn);
      }
    } catch (error) {
      errorHandler(res, 400, postFail);
    }
  })
}

module.exports = postTodo;