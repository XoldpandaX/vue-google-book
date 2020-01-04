import firebase from 'firebase';
import { request } from '@/utils';
import { FIREBASE_CONFIG, LIBRARY_CONSTANTS } from '@/constants';

export function addFavoriteBook() {
  return firebase.database().ref('another user').push({
    name: 'another one',
    surname: 'curshavel',
  });
}

export function fetchBooks({
  query = '',
  startIdx = 0,
  maxResults = LIBRARY_CONSTANTS.BOOKS_PER_PAGE,
}) {
  return request.get('volumes', {
    params: {
      q: query,
      printType: 'books',
      key: FIREBASE_CONFIG.apiKey,
      fields: 'totalItems, items(kind, id, etag, volumeInfo)',
      prettyPrint: false,
      maxResults,
      startIndex: startIdx,
    },
  });
}

export function getSearchTips({ query, maxResults = 10 }) {
  return request.get('volumes', {
    params: {
      q: query,
      printType: 'books',
      key: FIREBASE_CONFIG.apiKey,
      fields: 'items(id, volumeInfo/title)',
      projection: 'lite',
      prettyPrint: false,
      maxResults,
    },
  });
}
