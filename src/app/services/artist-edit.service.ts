import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArtistSpotify } from '../models/artist-spotify';
import { AlbumSpotify } from '../models/album-spotify';

@Injectable({
  providedIn: 'root'
})
export class ArtistEditService {

  private urlApi = environment.apiUrl;
  private urlArtistApi = '/artist';
  private urlArtistSearchById = this.urlArtistApi + '/searchById?id=';
  private urlGetAlbumsByIdArtist = this.urlArtistApi + '/getAlbumsByIdArtist?id=';

  constructor(private http: HttpClient) { }

  getArtistSpotify(id: string): Observable<ArtistSpotify> {
    const url = this.urlApi + this.urlArtistSearchById + id;
    return this.http.get<ArtistSpotify>(url);
  }

  getArtistAlbumSpotify(id: string): Observable<AlbumSpotify[]> {
    const url = this.urlApi + this.urlGetAlbumsByIdArtist + id;
    return this.http.get<AlbumSpotify[]>(url);
  }

}
