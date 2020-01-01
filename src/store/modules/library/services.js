import firebase from 'firebase';

export function addFavoriteBook() {
  return firebase.database().ref('another user').push({
    name: 'another one',
    surname: 'curshavel',
  });
}
