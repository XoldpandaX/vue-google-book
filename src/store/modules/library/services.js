import firebase from 'firebase';
import { request } from '@/utils';
import { FIREBASE_CONFIG } from '@/constants';

export function getAllFavoritesBooks({ userId }) {
  return firebase.firestore().collection(`${userId}`).get();
}

export function addBookToFavorite({ userId, selectedBook = {} }) {
  return firebase.firestore().collection(`${userId}`).add(selectedBook);
}

export function fetchBooks({
  query = '',
  startIdx = 0,
  maxResults,
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
