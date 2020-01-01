import firebase from 'firebase';

export function signUpUser({ email, password }) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export function signInUser({ email, password }) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function signOutUser() {
  return firebase.auth().signOut();
}
