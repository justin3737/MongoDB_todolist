const { successHandler, errorHandler } = require('./responseHandler');
const { message } = require('./libs');
const Todo = require('./models/todo');

/** 刪除所有Todo資料
 * @param data requestListener 資訊與清單物件
 */
 const deleteTodos = async(data) => {
  const { res } = data;
  const todos = await Todo.deleteMany();
  successHandler(res, todos);
}

/** 刪除單一Todo資料
 * @param data 列表資料
 */

 const deleteTodo = async(data) => {
  const { res, req } = data;
  try {
    const id = req.url.split('/').pop();
    const todos = await Todo.findByIdAndDelete(id)

    if (todos) {
      successHandler(res, todos);
    } else {
      errorHandler(res, 400, message.noData);
    }
  } catch (err) {
    errorHandler(res, 400, err.message);
  }
}

 module.exports = {
  deleteTodo,
  deleteTodos
}