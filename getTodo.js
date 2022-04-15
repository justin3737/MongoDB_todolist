const { successHandler, errorHandler } = require('./responseHandler');
const { message } = require('./libs');
const Todo = require('./models/todo');

/** 取得所有Todo資料
 * @param data requestListener 資訊與清單物件
 */
const getTodos = async(data) => {
  const { res } = data;
  const todos = await Todo.find();
  successHandler(res, todos);
}


/** 取得單一Todo資料
 * @param data 列表資料
 */

const getTodo = async(data) => {
  const { res, req } = data;
  const id = req.url.split('/')[2];
  const todo = await Todo.findById(id);

  if (todo) {
    successHandler(res, todo);
  } else {
    errorHandler(res, 400, message.noData)
  }
}


module.exports = {
  getTodo,
  getTodos
}