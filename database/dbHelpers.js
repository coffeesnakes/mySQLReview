const db = require('./index.js');

const dbHelpers = {
  get: (cb) => {
    let queryString = 'SELECT * FROM Food';
    db.query(queryString, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(null, results)
      }
    })
  },
  post: (req, cb) => {

  }
}

module.exports = dbHelpers;