import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoService {

  private urlApi = environment.apiUrl;
  private urlBrowse = this.urlApi + '/browse';
  private urlGenre = this.urlBrowse + '/genreseeds';
  private urlCategories = this.urlBrowse + '/getCategories';
  private urlfeatPlaylist = this.urlBrowse + '/getlistoffeatplaylist';
  private urlNewRelease = this.urlBrowse + '/getNewRelease';
  private urlRecommendation = this.urlBrowse + '/getRecommendation';

  constructor(private http: HttpClient) { }

  getGenre() {
    return this.http.get(this.urlGenre);
  }

  getCategories() {
    return this.http.get(this.urlCategories);
  }

  getfeatPlaylist() {
    return this.http.get(this.urlfeatPlaylist);
  }

  getNewRelease() {
    return this.http.get(this.urlNewRelease);
  }

  getRecommendation(){
    return this.http.get(this.urlRecommendation);
  }
}
