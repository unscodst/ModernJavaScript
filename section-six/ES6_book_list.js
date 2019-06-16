class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        // Get book list
        const list = document.getElementById('book-list');
        // Create tr element
        const row = document.createElement('tr');
        // Insert cols
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `
        list.appendChild(row);
    }
    showAlert(msg, className) {
        // Create div
        const div = document.createElement('div');
        // Add classes
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(msg));
        // Get container
        const container = document.querySelector('.container');
        // Get form
        const form = document.querySelector('#book-form');
        // Insert alert
        container.insertBefore(div, form);

        // Timeout after 3 seconds
        setTimeout(function (){
            document.querySelector('.alert').remove();
        },3000)
    }
    deleteBook(target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }
    clearInputs() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

}

// Local Storage Class
class Storage {
    static getBooksFromStorage() {
        let books;
        if(localStorage.getItem('books') === null) books = [];
        else books = JSON.parse(localStorage.getItem('books'));
        return books;
    }
    static displayBooks() {
        const books = Storage.getBooksFromStorage();
        books.forEach(function(book) {
            const ui = new UI();

            // Add book to UI
            ui.addBookToList(book);
        })
    }
    static addBookToStorage(book) {
        const books = Storage.getBooksFromStorage();
        books.push(book);

        localStorage.setItem('books', JSON.stringify(books))
    }
    static removeBookFromStorage(isbn) {
        const books = Storage.getBooksFromStorage();
        books.forEach(function(book,index) {
            if(book.isbn === isbn) books.splice(index,1)
        });
        localStorage.setItem('books', JSON.stringify(books));

    }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Storage.displayBooks());

// Event Listeners for Add Book
document.getElementById('book-form').addEventListener('submit', 
    function(e) {
        // Get form values
        e.preventDefault();
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value
        
        // Instantiate book
        const book = new Book(title, author, isbn);

        // Instantiate UI Object
        const ui = new UI();

        if(title === '' || author === '' || isbn === '') {
            // Error Alert
            msg = 'Please fill in all fields.'
            
            ui.showAlert(msg,'error')
        } else {
            // Add book to list
            ui.addBookToList(book);
            // Add to local storage
            Storage.addBookToStorage(book);
            // Clear inputs
            ui.clearInputs();
            msg = 'Book added';
            ui.showAlert(msg, 'success');
        }
        console.log(book)
});

// Event Listener for Delete Book
document.getElementById('book-list').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Instantiate UI
    const ui = new UI();
    ui.deleteBook(e.target);
    
    // Remove from local storage
    Storage.removeBookFromStorage(e.target.parentElement.previousElementSibling.textContent)
    
    // Show message
    msg = 'Book removed';
    ui.showAlert(msg, 'success');

})