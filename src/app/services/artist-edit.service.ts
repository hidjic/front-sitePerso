import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistEditService {

  private urlApi = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getArtistSpotify(id: string) {
    const url = this.urlApi + '/artist/searchById?id=' + id;
    console.log('url => ' + url);
    return this.http.get(url);
  }

}
