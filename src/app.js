'use strict'

const express = require('express')
const posts = require('./mock/posts.json')
let postsList = Object.keys(posts).map((value) => { return posts[value] })

const app = express()

app.use('/static', express.static(__dirname + '/public'))

app.set('view engine', 'pug')
app.set('views', __dirname + '/templates')

app.get('/', (req, res) => {
  let path = req.path
  // res.locals.path = path // this is the same as adding the path variable in the parameters below
  res.render('index', {path: path})
})

app.get('/blog/:title?', (req, res) => {
  let title = req.params.title
  if (title === undefined) {
    res.status(503)
    res.render('blog', {posts: postsList})
  } else {
    let post = posts[title] || {}
    res.render('post', {post: post})
  }
})

app.listen(3000, () => {
  console.log('The frontend server is running on port 3000!')
})
