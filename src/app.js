'use strict'

const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.send("I love mac 'n cheese!")
})

app.listen(3000)
