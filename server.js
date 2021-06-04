const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/moon', function (req, res) {
  res.send('Hello Moon!')
})

module.exports = app
