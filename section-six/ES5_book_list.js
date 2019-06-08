// Book Constructor - Creating book object
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add book to list
UI.prototype.addBookToList = function (book) {
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
UI.prototype.clearInputs = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event Listeners
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
        
        // Add book to list
        ui.addBookToList(book);
        // Clear inputs
        ui.clearInputs();

        console.log(book)
});