// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (arr, bookName) {
  let addedArr = [...arr];
  addedArr.push(bookName);
  return addedArr;
  
  // Change code above this line
}

// Change code below this line
function remove (arr, bookName) {
  var book_index = arr.indexOf(bookName);
  if (book_index >= 0) {
    let removedArr = [...arr];
    removedArr.splice(book_index, 1);
    return removedArr;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
console.log(bookList);