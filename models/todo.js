const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    createdAt: {
      type: Date,
      default: Date.now,
      select: false //不回傳前端
    }
  },
  //預設值物件
  {
    versionkey: false,
    //時間戳記
    //timestamps: true,

    //自訂集合,最後不想強制加上s
    //collection: 'todo' //這邊自訂名稱
  }
)

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo