# 📚 Library App

A book library application for tracking your reading list, built with JavaScript objects and DOM manipulation.

[📖 **Live Demo**](https://k7le-777.github.io/library/) | [📝 **Code**](https://github.com/k7le-777/library)

## About

Built as part of **The Odin Project's Full Stack JavaScript Path**, this project introduced me to object constructors and managing a collection of objects.

## Features

- ➕ **Add Books** - Form to add new books to library
- 📚 **Display Collection** - Visual cards for each book
- ✅ **Read Status** - Toggle whether you've read the book
- 🗑️ **Remove Books** - Delete books from collection
- 💾 **Dynamic Updates** - UI updates in real-time

## Technologies

- JavaScript (ES6) - Objects, arrays, DOM manipulation
- HTML5 - Form and structure
- CSS3 - Card layout with Grid/Flexbox
- Git/GitHub - Version control

## What I Learned

### Object Constructors
```javascript
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function() {
  this.read = !this.read;
};