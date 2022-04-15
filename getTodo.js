const { successHandler } = require('./responseHandler');
const Todo = require('./models/todo');

/** 取得所有Todo資料
 * @param data requestListener 資訊與清單物件
 */
const getTodos = async(data) => {
  const { res } = data;
  await Todo.find();
  successHandler(res);
}

module.exports = getTodos;