// Lowdb
const low = require('./node_modules/lowdb/lib/main');
const FileSync = require('./node_modules/lowdb/adapters/FileSync');
 
const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults
db.defaults({ users: [], sessions:[]})
  .write()

module.exports = db;