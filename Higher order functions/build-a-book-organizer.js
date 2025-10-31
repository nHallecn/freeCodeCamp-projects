** start of script.js **

let books=[
  {
    title:"To Kill a Mockingbird",
    authorName : "Harper Lee",
    releaseYear : 1960
  },
  {
    title : 'The Great Gatsby',
    authorName : 'F. Scott Fitzgerald',
    releaseYear : 1925
  },
  {
    title : '1984',
    authorName : 'George Orwell',
    releaseYear : 1949
  }

]

function sortByYear(book1, book2){
  if(book1.releaseYear < book2.releaseYear){
    return -1;
  }
  else if(book1.releaseYear > book2.releaseYear){
    return 1;
  }
  else return 0;
}

let filteredBooks = books
    .filter(book => book.releaseYear >= 1950);
    
filteredBooks.sort(sortByYear);



** end of script.js **

