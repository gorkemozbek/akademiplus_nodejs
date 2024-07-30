const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/', (req, res) => res.send('Got a POST request'))

app.put('/', (req, res) => res.send('Got a PUT request'))

app.delete('/', (req, res) => res.send('Got a DELETE request'))

app.use('/users', require('./src/controllers/users'))

app.listen(3000, () => console.log('App listening on port 3000!'))