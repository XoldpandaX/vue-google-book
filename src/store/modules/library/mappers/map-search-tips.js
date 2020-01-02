import get from 'lodash.get';

export default function (books) {
  return books.map((book) => ({
    id: get(book, 'id', ''),
    title: get(book, 'abbreviatedTitle', ''),
  }));
}
