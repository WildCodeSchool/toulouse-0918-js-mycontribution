const { promisify } = require('util')
const bcrypt = require('bcrypt')
const db = require('../conf')
const queryAsync = promisify(db.query.bind(db))
const saltRounds = 10

const resetPass = (id, clearPass) => bcrypt.hash(clearPass, saltRounds)
  .then(password => {
    console.log('hashed pass', password);
    const query = 'UPDATE user SET ? WHERE id = ?'
    const values = [{ password }, id]
    return queryAsync(query, values)
  })
  .then(result => {
    console.log('update result', result);
    return result.insertId
  });

if (process.argv && process.argv[1].includes('resetPass')) {
  if (process.argv.length === 4) {
    resetPass(Number(process.argv[2]), process.argv[3])
      .then(() => process.exit())
      .catch(err => {
        console.error(err)
        process.exit(1)
      })
  } else {
    console.error('Usage: node path/to/resetPass <userId> <password>')
    process.exit(1)
  }
}

module.exports = resetPass
