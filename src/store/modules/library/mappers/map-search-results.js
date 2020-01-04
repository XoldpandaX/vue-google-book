import get from 'lodash.get';
import { cutStringByLength } from '@/utils';

export default function ({ data }) {
  const books = get(data, 'items', null);

  if (books) {
    const combineAuthors = (authorsArr) => (
      authorsArr.length
        ? authorsArr.reduce((allAuthors, nextAuthor, idx) => (
          ` ${allAuthors}${idx > 0 ? ' & ' : ''}${nextAuthor}`
        ), '')
        : ''
    );

    return {
      books: (
        books.map(({ id, etag, volumeInfo }) => {
          const publishedYear = get(volumeInfo, 'publishedDate', '');
          const authors = get(volumeInfo, 'authors', []);
          const averageRating = get(volumeInfo, 'averageRating', '');
          const title = get(volumeInfo, 'title', '');
          const thumbnail = get(volumeInfo, ['imageLinks', 'thumbnail'], '');
          const description = get(volumeInfo, 'description', '');

          return {
            id,
            etag,
            thumbnail,
            averageRating,
            title,
            description: cutStringByLength(description, 897),
            abbreviatedDescription: cutStringByLength(description, 137),
            abbreviatedTitle: cutStringByLength(title, 48),
            publishedYear: publishedYear ? ` ${publishedYear.slice(0, 4)}` : '',
            authors: combineAuthors(authors),
          };
        })
      ),
      totalItems: get(data, 'totalItems', 0),
    };
  }

  return {
    books: [],
    totalItems: 0,
  };
}
