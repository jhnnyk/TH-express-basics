'use strict'

const express = require('express')
const posts = require('./mock/posts.json')

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>I love my family!</h1>')
})

app.get('/blog/:title?', (req, res) => {
  let title = req.params.title
  if (title === undefined) {
    res.status(503)
    res.send('this page is under construction')
  } else {
    let post = posts[title]
    res.send(post)
  }
})

app.listen(3000, () => {
  console.log('The frontend server is running on port 3000!')
})
