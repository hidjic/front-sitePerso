import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ArtistSearchSpotify } from '../models/artist-search-spotify';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  private urlApi = environment.apiUrl;

  constructor(private http: HttpClient) { }

  searchInApi(type: string, research: string): Observable<ArtistSearchSpotify[]> {
    console.log('type => ' + type);
    console.log('research => ' + research);
    const url = this.urlApi + '/' + type + '/searchByName?name=' + research;
    console.log('url => ' + url);
    return this.http.get<ArtistSearchSpotify[]>(url);
  }

}
