import { Component, OnInit } from '@angular/core';

import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user) => { this.isAuth = user ? true : false; }
    );
  }

  onSignOut() {
    this.authService.signOutUser();
  }

}
