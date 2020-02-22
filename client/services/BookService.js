export class BookService {

    constructor() {
        this.URI = "/api/books";
    }

    async getBooks() {
        try {
            const response = await fetch(this.URI);
            const books = await response.json();
            return books;
        } catch (error) {
            console.log(error);
        }
    }

    async postBook(book) {
        try {
            const response = await fetch(this.URI,{
                method: 'POST',
                body: book,
            });
            const data = await response.json();
        } catch (error) {
            console.log(error);
        }
    }

    async deleteBook(bookId) {
        try {
            const response = await fetch(`${this.URI}/${bookId}`,{
                headers: {
                    'Content-type':'application/json'
                },
                method: 'DELETE', 
            });
            const data = await response.json();
        } catch (error) {
            console.log(error);
        }
    }

}

export default BookService;