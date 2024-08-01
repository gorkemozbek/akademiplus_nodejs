const { Book } = require('../models');

class BookService {
    async getBook(id) {
        return await Book.findOne({
            where: {
                id: id
            }           
        });
    }

    async getBooks() {
        return await Book.findAll({
            attributes: ['title', 'author', 'publisher', 'publicationDate', 'numberOfPages']
        });
    }

    async addBook(book) {
        await Book.create({
            title: book.title,
            author: book.author,
            publisher: book.publisher,
            publicationDate: book.publicationDate,
            numberOfPages: book.numberOfPages});

        return "Book added successfully";
    }

    async updateBook(book) {
        await Book.update({
            title: book.title,
            author: book.author,
            publisher: book.publisher,
            publicationDate: book.publicationDate,
            numberOfPages: book.numberOfPages
        }, {
            where: {
                id: book.id
            }
        });

        return "Book updated successfully";
    }

    async deleteBook(id) {
        await Book.destroy({
            where: {
                id: id
            }
        });

        return "Book deleted successfully";
    }
}

module.exports = BookService;