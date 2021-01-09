import firebase from 'firebase/app';
import 'firebase/database';

import config from './config';

firebase.initializeApp(config.firebase);
const db = firebase.database();

export default db;
