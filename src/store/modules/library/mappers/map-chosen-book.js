import pick from 'lodash.pick';

export default function (book) {
  return pick(book, [
    'id',
    'averageRating',
    'title',
    'publishedYear',
    'authors',
    'description',
    'thumbnail',
  ]);
}
