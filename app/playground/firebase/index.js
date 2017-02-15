import firebase from 'firebase';

// Initialize Firebase
const config = {

};
firebase.initializeApp(config);

const firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Remove',
    version: 0.1
  },

}).then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
});

firebaseRef.child('app').set({
  name: 'Todo App'
});
