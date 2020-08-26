import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ArtistSpotify } from '../models/artist-spotify';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  private urlApi = environment.apiUrl;

  constructor(private http: HttpClient) { }

  searchInApi(type: string, research: string): Observable<ArtistSpotify[]> {
    // console.log('type => ' + type);
    // console.log('research => ' + research);
    const url = this.urlApi + '/' + type + '/searchByName?name=' + research;
    // console.log('url => ' + url);
    return this.http.get<ArtistSpotify[]>(url);
  }

}
