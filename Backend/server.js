const app = require('./app')
require('dotenv').config();

app.listen(process.env.PORT, () => {
  console.log(`:::: SERVER CONNECTED TO PORT ${process.env.PORT} ::::`)
})