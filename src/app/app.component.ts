import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontZiqPerso';

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCUpZVqXbbT8hoCNg15z0vP4bP6EsfqCw8',
      authDomain: 'ziqpersoauth.firebaseapp.com',
      databaseURL: 'https://ziqpersoauth.firebaseio.com',
      projectId: 'ziqpersoauth',
      storageBucket: 'ziqpersoauth.appspot.com',
      messagingSenderId: '366225049970',
      appId: '1:366225049970:web:522d806efb998d64cbf5eb',
      measurementId: 'G-ZTCLERL4KP'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }

}
