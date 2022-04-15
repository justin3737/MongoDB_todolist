const { successHandler, errorHandler } = require('./responseHandler');
const { message } = require('./libs');
const Todo = require('./models/todo');

/** 刪除所有Todo資料
 * @param data requestListener 資訊與清單物件
 */
 const deleteTodos = async(data) => {
  const { res } = data;
  await Todo.deleteMany();
  successHandler(res);
}

/** 刪除單一Todo資料
 * @param data 列表資料
 */

 const deleteTodo = async(data) => {
  const { res, req } = data;
  try {
    const id = req.url.split('/').pop();
    await Todo.findByIdAndDelete(id)
    successHandler(res);
  } catch (err) {
    errorHandler(res, 400, err.message);
  }
}

 module.exports = {
  deleteTodo,
  deleteTodos
}