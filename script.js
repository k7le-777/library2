const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}
    
//shared function for all books
Book.prototype.toggleRead = function() {
    this.isRead = !this.isRead;
}
Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? 'already read' : 'not read yet'}`;
}

//form submission handling
const form = document.querySelector(`#book-form`);
form.addEventListener("submit", (event) => { 
    event.preventDefault(); 
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const isRead = document.querySelector('#isRead').checked;
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
//displays books
    renderLibrary();
    form.reset();
});

//LOOP through library and render each book
function renderLibrary() {
    const libraryDiv = document.querySelector('#library');
    libraryDiv.textContent = '';

    myLibrary.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.textContent = book.info();

        libraryDiv.appendChild(bookDiv);
    });
}





//test

