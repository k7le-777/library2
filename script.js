//data model
const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}
    
//selectors
const form = document.querySelector(`#book-form`);
const showForm = document.querySelector('#show-form');
const formDialog = document.querySelector('#form-dialog');
const libraryDiv = document.querySelector('#library');


//book methods
Book.prototype.toggleRead = function() {
    this.isRead = !this.isRead;
}
Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? 'already read' : 'not read yet'}`;
}
//event listeners
showForm.addEventListener('click', () => {
    formDialog.showModal();
});

form.addEventListener("submit", (event) => { 
    event.preventDefault(); 
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const isRead = document.querySelector('#isRead').checked;
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);

    renderLibrary();
    form.reset();
    formDialog.close();
});

//rendereing function
function renderLibrary() {
    libraryDiv.textContent = '';
    
    if (myLibrary.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = 'Your library is empty. Add your first book!';
    libraryDiv.appendChild(emptyMessage);
    return;
    }

    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        
        bookDiv.classList.add('book-card'); // Use this for styling
        
        //info
        const bookInfo = document.createElement('p');
        bookInfo.textContent = book.info();
        
        //toggle button
        const toggleReadBtn = document.createElement('button');
        toggleReadBtn.textContent = book.isRead ? 'Mark as Unread' : 'Mark as Read';
        toggleReadBtn.addEventListener('click', () => {
            book.toggleRead(); 
            renderLibrary(); 
        });
        //Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            myLibrary.splice(index, 1); // Remove book from array
            renderLibrary(); // Re-render the library
        });

        bookDiv.appendChild(bookInfo);
        bookDiv.appendChild(toggleReadBtn);
        bookDiv.appendChild(removeBtn);
        libraryDiv.appendChild(bookDiv);
    });
}