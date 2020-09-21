import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
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

  getAllData(id: string) {
    const url = this.urlApi + this.urlGetAlbumsByIdArtist + id + '&typeAlbum=';
    const urlArtist = this.urlApi + this.urlArtistSearchById + id;
    return forkJoin([
      this.http.get<ArtistSpotify>(urlArtist),
      this.http.get<AlbumSpotify[]>(url + 'album'),
      this.http.get<AlbumSpotify[]>(url + 'single'),
      this.http.get<AlbumSpotify[]>(url + 'appears_on'),
      this.http.get<AlbumSpotify[]>(url + 'compilation')
    ]
  );
  }

}
