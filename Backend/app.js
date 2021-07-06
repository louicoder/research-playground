const express = require('express');
const mongo = require('mongoose');
const app = express();

// connection mongodb
const db = require('./Connection');
// run the connection
db();

// middlerware

// routes

app.get('/getres', async (req, res) => {
  try {
    await mongo
      .Collection('users')
      .aggregate([
        {
          $lookup: {
            from: 'cards', // other table name
            localField: 'userId', // name of users table field
            foreignField: 'userId', // name of userinfo table field
            as: 'user_info' // alias for userinfo table
          }
        },
        { $unwind: '$user_info' }
      ])
      .then((res) => res.json({ success: true, res }));
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});

module.exports = app;
