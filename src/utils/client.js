import firebase from 'firebase/app';
import 'firebase/auth';

const clientCredentials = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
};

if (!firebase.apps.length) {
  firebase?.initializeApp(clientCredentials);
}

export { firebase, clientCredentials };
