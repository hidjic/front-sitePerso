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
  private searchByName = '/searchByName?name=';

  constructor(private http: HttpClient) { }

  searchInApi(type: string, research: string): Observable<ArtistSpotify[]> {
    const url = this.urlApi + '/' + type + this.searchByName + research;
    return this.http.get<ArtistSpotify[]>(url);
  }

}
