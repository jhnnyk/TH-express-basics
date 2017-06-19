'use strict'

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send("<h1>I love mac 'n cheese!</h1>")
})

app.listen(3000, () => {
  console.log("The frontend server is running on port 3000!");
})
