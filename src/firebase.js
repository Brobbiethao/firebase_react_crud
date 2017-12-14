import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyCYBTVXJLywaEyHLbA7Vdqb0fVBL2aNbI0',
    authDomain: 'projectquin.firebaseapp.com',
    databaseURL: 'https://projectquin.firebaseio.com',
    projectId: 'projectquin',
    storageBucket: 'projectquin.appspot.com',
    messagingSenderId: '291754376938'
  };
  firebase.initializeApp(config);

  export default firebase;

  export const database = firebase.database();