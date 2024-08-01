const express = require('express')
const router = express.Router()
const BookService = require('../services/bookService')
const auth = require('../helpers/auth')

// router.use(auth('READ'));

router.get('/:id', async (req, res) => {
    const result = await new BookService().getBook(req.params.id);
    res.send(result);
});

router.get('/', auth('READ'), async (req,res) => {
    const result = await new BookService().getBooks();
    res.send(result);
});

router.post('/', async (req,res) => {
    const result = await new BookService().addBook(req.body);
    res.send(result);
});

router.put('/', async (req,res) => {
    const result = await new BookService().updateBook(req.body);
    res.send(result);
});

router.delete('/', async (req,res) => {
    const result = await new BookService().deleteBook(req.params.id);
    res.send(result);
});

module.exports = router;
