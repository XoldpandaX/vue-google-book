import { LIBRARY_CONSTANTS } from '@/constants';

export default function (books = {}) {
  const res = [];
  books.forEach((doc) => res.push(doc.data()));

  return {
    favoriteBooks: res,
    favoriteTotalPages: Math.ceil(res.length / LIBRARY_CONSTANTS.BOOKS_PER_PAGE),
  };
}
