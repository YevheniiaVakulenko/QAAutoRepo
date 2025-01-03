export class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }

  get title(){
    return this._title;
  }

  set title(newTitle){
    if(typeof newTitle !== "string" || newTitle.trim() === ""){
      console.log("Please provide new title correctly");
      return;
    }
    this._title = newTitle;
  }

  get author(){
    return this._author;
  }

  set author(newAuthor){
    if(typeof newAuthor !== "string" || newAuthor.trim() === ""){
      console.log("Please provide new author correctly");
      return;
    }
    this._author = newAuthor;
  }

  get year(){
    return this._year;
  }

  set year(newYear){
    if(!Number.isInteger(newYear) || newYear < 0){
      console.log("Please provide new publication year correctly");
      return;
    }
    this._year = newYear;
  }

  printInfo() {
    console.log(`${this._title} written by ${this._author} in ${this._year}`);
  }

  static findOldestBook(books) {
    let oldestbook = books[0];
    for(let i = 1; i < books.length; i++){
      if(books[i].year < oldestbook.year){
        oldestbook = books[i];
      }
    }
    return oldestbook;
  }
}