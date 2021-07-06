const db = require('mongoose');
require('dotenv').config();

// connection
const connection = () => db.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
  if (error) {
    console.log(":::: attempting to reconnect to mongodb ::::")
     return setTimeout(() => {
      connection();
     }, 3000);
  }
    console.log(":::: CONNECTED TO DABATASE ::::")
  
 })


module.exports = connection;
// researchAdmin45