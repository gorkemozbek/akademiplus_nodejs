const express = require('express')
const router = express.Router()

router.get('/:id', (req, res) => {
     const id = req.params.id;
    res.send(`Get user with :id ${id}`)
})

router.get('/', (req,res) => {
     res.send(`Get all users pageSize ${req.query.pageSize} pageNumber ${req.query.pageIndex}`)
})

router.post('/', (req,res) => {
    res.send(`Create new user with name ${req.body.name} surname ${req.body.surname}` )
})

router.put('/', (req,res) => {
    res.send(`Update the user with name ${req.body.name} surname ${req.body.surname}` )
})

router.delete('/', (req,res) => {
    res.send('delete request')
})



module.exports = router;