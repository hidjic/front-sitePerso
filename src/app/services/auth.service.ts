import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private urlApi = 'http://localhost:8080';
  private urlApi = environment.apiUrl;
  private urlAuthorization = this.urlApi + '/authorization';
  private urlLogin = this.urlAuthorization + '/login';

  constructor(private http: HttpClient) { }

  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {resolve(); },
          (error) => {reject(error); }
        );
      }
    );
  }

  signInUser(email: string, password: string) {
    email = 'admin@admin.com';
    password = 'azerty';
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {resolve(); },
          (error) => {
            console.log('signInUser - error => ' + error);
            reject(error); }
        );
      }
    );
  }

  signOutUser() {
    firebase.auth().signOut();
  }

  loginToApi(): Observable<string> {
    return this.http.get(this.urlLogin,  {responseType: 'text'});
  }

}
