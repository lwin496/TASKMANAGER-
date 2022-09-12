const express = require('express');
const path = require('path');
const app = express();

const taskCreate = require('./routers/task-router')

app.use(express.static('./public'))
// app.use(express.static('./styles'))

app.get('/', (req, res) => {
      console.log(__dirname)
      res.sendFile(path.resolve(__dirname, 'public/index.html'))
      // res.sendFile(path.resolve(__dirname, 'styles/index.css'))
})


app.all('*', (req, res) => {
      res.status(404).send('404 Not Found')
})

app.listen(5000,()=>{ 
      console.log('listening on port 5000')
})



