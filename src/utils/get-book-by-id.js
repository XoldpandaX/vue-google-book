// Only uses in library store module to pick a book
export default function ({ sourceOfBooks = [], bookId }) {
  return sourceOfBooks.filter((book) => bookId === book.id)[0];
}
