const express = require('express')
require('express-async-errors')
const app = express()
const database = require('./src/models')


require('dotenv').config()

const { PORT } = process.env;

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

database.sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
})

app.use((req, res, next) => {    
    res.status(404).send("Endpoint not found!")    
})

app.use((err, req, res, next) => {   
    console.log(err.stack);
    res.status(500).send('Something broke!')
})

app.listen(PORT || 3000, () => console.log(`App listening on port ${PORT || 3000}!`))