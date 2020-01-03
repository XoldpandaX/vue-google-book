import pick from 'lodash.pick';
import get from 'lodash.get';

export default function ({ data }) {
  const books = get(data, 'items', null);

  if (books) {
    return {
      books: (
        books.map(({ id, etag, volumeInfo }) => {
          const publishedYear = get(volumeInfo, 'publishedDate', '');
          const authors = get(volumeInfo, 'authors', []);
          const averageRating = get(volumeInfo, 'averageRating', '');
          const title = get(volumeInfo, 'title', '');
          const thumbnail = get(volumeInfo, ['imageLinks', 'thumbnail'], '');

          return {
            ...pick(volumeInfo, ['description']),
            id,
            etag,
            thumbnail,
            averageRating,
            title,
            abbreviatedTitle: title.length > 51 ? `${title.slice(0, 48)}...` : title.slice(0, 51),
            publishedYear: publishedYear ? ` ${publishedYear.slice(0, 4)}` : '',
            authors: (
              authors.length
                ? authors.reduce((allAuthors, nextAuthor, idx) => (
                  ` ${allAuthors}${idx > 0 ? ' & ' : ''}${nextAuthor}`
                ), '')
                : ''
            ),
          };
        })
      ),
      totalItems: get(data, 'totalItems', 0),
    };
  }

  return {
    books: null,
    totalItems: null,
  };
}
