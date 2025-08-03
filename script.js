//data model
const myLibrary = [];

class Book {
    constructor(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    }
    
    toggleRead() {
    this.isRead = !this.isRead;
    } 
    
    info() {
    const pageLabel = this.pages == 1 ? "page" : "pages";
    return `${this.title} by ${this.author}, ${this.pages} ${pageLabel}, ${this.isRead ? 'already read' : 'not read yet'}`;
    }
}
    
//selectors
const form = document.querySelector(`#book-form`);
const showForm = document.querySelector('#show-form');
const formDialog = document.querySelector('#form-dialog');
const libraryDiv = document.querySelector('#library');


//book methods


//event listeners
showForm.addEventListener('click', () => {
    formDialog.showModal();
});

form.addEventListener("submit", (event) => { 
    event.preventDefault(); 
    const title = document.querySelector('#title').value.trim();
    const author = document.querySelector('#author').value.trim();
    const pages = document.querySelector('#pages').value.trim();
    const isRead = document.querySelector('#isRead').checked;
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);

    if (!/^\d+$/.test(pages) || parseInt(pages) <= 0) {
        alert("Please enter a valid positive number for pages.");
        return;
    }


    ui.renderLibrary();
    form.reset();
    formDialog.close();
});



class LibraryUI {
    constructor(library, libraryDiv) {
        this.library = library;
        this.libraryDiv = libraryDiv;
    }

    renderLibrary() {
        this.libraryDiv.textContent = '';
        
        if (this.library.length === 0) {
            this.renderEmptyMessage();
            return;
        }

        this.library.forEach((book, index) => {
            const bookCard = this.createBookCard(book,index);
            this.libraryDiv.appendChild(bookCard);
        });
    }

    renderEmptyMessage() {
    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = 'Your library is empty. Add your first book!';
    this.libraryDiv.appendChild(emptyMessage);
    }
    

    createBookCard(book, index) {
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('book-card');
            
            const bookInfo = document.createElement('p');
            bookInfo.textContent = book.info();

            const toggleReadBtn = document.createElement('button');
            toggleReadBtn.textContent = book.isRead ? 'Mark as Unread' : 'Mark as Read';
            toggleReadBtn.addEventListener('click', () => {
                book.toggleRead(); 
                this.renderLibrary(); 
            });

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', () => {
                this.library.splice(index, 1); // Remove book from array
                this.renderLibrary(); // Re-render the library
            });

            bookDiv.appendChild(bookInfo);
            bookDiv.appendChild(toggleReadBtn);
            bookDiv.appendChild(removeBtn);
            return bookDiv;
    }

}

const ui = new LibraryUI(myLibrary, document.querySelector('#library'));
ui.renderLibrary();