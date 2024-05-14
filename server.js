const express = require('express')
const path = require('path')
const port = process.env.PORT || 8000

const app = express()

//app.use(express.static('public'))

let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'},
    {id: 4, title: 'Post Four'}
]

//Get all posts

app.get('/api/posts', (req, res) => {
 res.json(posts)
})

//Get single Post

app.get('/api/posts/1', (req, res) => {
    res.json(posts)
   })



app.listen(port, () => console.log(`Server is running on 8000`))