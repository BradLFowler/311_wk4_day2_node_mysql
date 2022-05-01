const mysql = require('mysql2')

require("dotenv").config()

const host = process.env.HOST
const user = process.env.USER
const password = process.env.PASSWORD
const database = process.env.DATABASE

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: host,
        user: user,
        password: password,
        database: database
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;