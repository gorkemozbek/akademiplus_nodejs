const express = require('express')
const router = express.Router()
const UserService = require('../services/userService')

router.get('/:id', (req, res) => {
     const id = req.params.id;
    res.send(`Get user with :id ${id}`)
})

router.get('/', async (req,res) => {
    const result = await new UserService().getAllUsers();
    res.send(result)
})

router.post('/', async (req,res) => {
    const result = await new UserService().addUser(req.body);
    res.send(result);
})

router.put('/', (req,res) => {
    res.send(`Update the user with name ${req.body.name} surname ${req.body.surname}` )
})

router.delete('/', (req,res) => {
    res.send('delete request')
})



module.exports = router;