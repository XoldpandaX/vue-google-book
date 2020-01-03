import firebase from 'firebase';
import { request } from '@/utils';
import { FIREBASE_CONFIG } from '@/constants';

export function addFavoriteBook() {
  return firebase.database().ref('another user').push({
    name: 'another one',
    surname: 'curshavel',
  });
}

export function searchBooks({ query }) {
  return request.get('volumes', {
    params: {
      q: query,
      printType: 'books',
      key: FIREBASE_CONFIG.apiKey,
      fields: 'totalItems, items(kind, id, etag, volumeInfo)',
      prettyPrint: false,
    },
  });
}
