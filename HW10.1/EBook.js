import { Book } from './Book.js';

export class EBook extends Book {
  constructor(title, author,year, format) {
    super(title, author,year);
    this._format = format;
  }

  get format(){
    return this._format;
  }

  set format(newFormat){
    if(typeof newFormat !== "string" || newFormat.trim() === ""){
      console.log("Please provide new format correctly");
      return;
    }
    this._format = newFormat;
  }

  printInfo() {
      console.log(`${this.title} written by ${this.author} in ${this.year} is available in ${this.format} format`);
  }

  static CreateEBook(book, format){
    if (!(book instanceof Book)) {
      throw new Error("First argument must be an instance of Book");
    }
      return new EBook(book.title, book.author, book.year, format);
  }
}