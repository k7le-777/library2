> 💡 Notes: 
I used chatgpt entirely for my first library project hence this is Library2.
Library2 is an approach with my own understanding of using contructors with the help of gpt but with the limitations of providing the code directly to me, instead having to understand what i and structure my own way to build this project.
Here can see see my thought  process of what i did not think of the first time.



OVERVIEW:
A simple website with JavaScript functionality that lets users add books to a personal library.
Books are added via a from that is then displayed on the page.
Each book includes a title,author, number of oages, read status and a.unique ID

Psuedocode:
// Set up book storage
Initialize empty array: 
myLibrary = []

// Define book template
Function Book(title, author, pages, isRead)
    Assign unique ID using crypto.randomUUID()
    Assign arguments to instance properties

// Shared methods
Add toggleRead method to Book.prototype
Add info method to Book.prototype

//Handle form submission on form submit:
    Prevent page reload
    Get form input values
    Create new Book object
    Push to myLibrary array
    Call renderLibrary()
    Reset form

// Set up book storage
Initialize empty array: myLibrary = []

// Define book template
Function Book(title, author, pages, isRead)
    Assign unique ID using crypto.randomUUID()
    Assign arguments to instance properties

// Shared methods
Add toggleRead method to Book.prototype
Add info method to Book.prototype

// Handle form submission
On form submit:
    Prevent page reload
    Get form input values
    Create new Book instance
    Push to myLibrary array
    Reset form
    Call renderLibrary()

// Render books
Function renderLibrary():
    Clear #library container
    For each book in myLibrary:
        Create new div
        Fill div with book.info()
        Append to #library


    
