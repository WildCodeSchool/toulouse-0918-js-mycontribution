const mysql = require('mysql');
const util = require('util');

const settings = process.env.NODE_ENV === 'production'
  ? require('./settings')
  : require('./settings.local')

const connection = mysql.createConnection(settings.db);

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    process.exit(1);
  }

  console.log('connected as id ' + connection.threadId);
});

connection.queryAsync = util.promisify(connection.query.bind(connection));

module.exports = connection;