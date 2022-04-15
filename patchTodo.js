const { successHandler, errorHandler } = require('./responseHandler');
const { message } = require('./libs');
const Todo = require('./models/todo');

const patchTodo  = (data) => {
  const { res, req } = data;

  let body = '';
  req.on('data', chunk => {
    body += chunk;
  });

  req.on('end', async() => {
    const { noData, wrongColumn } = message
    try {
      const { title } = JSON.parse(body);

      if (title) {
        const id = req.url.split('/').pop();
        await Todo.findByIdAndUpdate(id, { title: title })
        successHandler(res);
      } else {
        errorHandler(res, 400, wrongColumn);
      }
    } catch (err) {
      errorHandler(res, 400, err.message);
    }
  });

}

module.exports = patchTodo;