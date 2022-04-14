/** cors 跨網域設定 */
const headers = {
  // Headers允許的資訊 Content-Type, Authorization, Content-Length, X-Requested-With
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
  'Access-Control-Allow-Origin': '*',
  // 允許跨網域使用的方法 PATCH, POST, GET, OPTIONS, DELETE
  'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
  // JSON格式的回傳設定
  'Content-Type': 'application/json'
}

/** 狀態訊息 */
const message = {
  404      : '無此網站路由',
  postFail : '新增失敗',
  wrongColumn : '欄位未正確填寫',
  noData : '無此資料'
}

/** 資料庫 */
const libs = {
  headers,
  message
}

module.exports = libs;