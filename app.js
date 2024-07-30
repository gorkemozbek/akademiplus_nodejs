const express = require('express')
const app = express()
const cors = require('cors')

app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.url}`)
    next()
})

app.use(cors())
app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('/users', require('./src/controllers/users'))

app.use((req, res, next) => {    
    res.status(404).send("Endpoint not found!")    
})

app.use((err, req, res, next) => {   
    console.log(err.stack);
    res.status(500).send('Something broke!')
})

app.listen(3000, () => console.log('App listening on port 3000!'))