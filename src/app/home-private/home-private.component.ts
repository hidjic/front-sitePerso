import { Component, OnInit } from '@angular/core';
import { ArtistSpotify } from '../models/artist-spotify';

@Component({
  selector: 'app-home-private',
  templateUrl: './home-private.component.html',
  styleUrls: ['./home-private.component.scss']
})
export class HomePrivateComponent implements OnInit {

  constructor() { }

  artistEdit: ArtistSpotify;

  ngOnInit(): void { }

  artistToEdit(artist: ArtistSpotify) {
    this.artistEdit = artist;
  }

}
