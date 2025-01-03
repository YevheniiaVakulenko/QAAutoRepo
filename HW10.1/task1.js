import { Book } from './Book.js';
import { EBook } from './EBook.js';

console.log("Task 1: class Book");
const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("Sapiens: A Brief History of Humankind", "Yuval Noah Harari", 2011);
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

book1.printInfo();
book2.printInfo();
book3.printInfo();

console.log("Task 2: class EBook");
const ebook1 = new EBook("1984", "George Orwell", 1949, "pdf");
const ebook2 = new EBook("Sapiens: A Brief History of Humankind", "Yuval Noah Harari", 2011,"paper");
const ebook3 = new EBook("To Kill a Mockingbird", "Harper Lee", 1960,"epub");

ebook1.printInfo();
ebook2.printInfo();
ebook3.printInfo();

console.log("Task 3: Get/Set");
const bookToChange = new Book("1984", "George Orwell", 1950);
console.log(bookToChange.year);
bookToChange.year = -12;
bookToChange.year = 1949;
console.log(bookToChange.year);

const ebookToChange = new EBook("1984", "George Orwell", 1949,"paper");
console.log(ebookToChange.format);
ebookToChange.format = 45;
ebookToChange.format ="pdf";
console.log(ebookToChange.format);

console.log("Task 4: Static method in class Book");
const books = [
    new Book("1984", "George Orwell", 1949),
    new Book("Sapiens: A Brief History of Humankind", "Yuval Noah Harari", 2011),
    new EBook("To Kill a Mockingbird", "Harper Lee", 1960, "pdf"),
    new EBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, "epub")
  ];
  
  const oldestBook = Book.findOldestBook(books);
  
  oldestBook.printInfo();

console.log("Task 5: Static method in class EBook");
const bookToCopy = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const newEBook = EBook.CreateEBook(bookToCopy,"pdf");
console.log(newEBook);