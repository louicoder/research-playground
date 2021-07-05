const db = require('mongoose');

// connection
const connection = () => db.connect('mongodb+srv://admin:researchAdmin45@rs1.ffyjw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
  if (error) {
    console.log(":::: attempting to reconnect to mongodb ::::")
     setTimeout(() => {
      connection();
     }, 3000);
  }
    console.log(":::: CONNECTED TO DABATASE ::::")
  
 })


module.exports = connection;
// researchAdmin45