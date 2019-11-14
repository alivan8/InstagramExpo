import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
  apiKey: 'AIzaSyCoA0KpyA3lEmtBbvg_U5o47JXJA9A1jUk',
  authDomain: 'intagram-bd89f.firebaseapp.com',
  databaseURL: 'https://intagram-bd89f.firebaseio.com',
  projectId: 'intagram-bd89f',
  storageBucket: 'intagram-bd89f.appspot.com',
  messagingSenderId: '233914730029',
  appId: '1:233914730029:web:9bff2b0a1476a72341daa4',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const autenticacion = firebase.auth();
export const baseDatos = firebase.database();
