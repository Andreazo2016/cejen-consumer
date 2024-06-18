require('dotenv').config()
const db = require('./config/db')

db.raw('show tables').then(result => console.log(result))