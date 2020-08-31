import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistEditService } from 'src/app/services/artist-edit.service';
import { ArtistSpotify } from 'src/app/models/artist-spotify';
import { AlbumSpotify } from 'src/app/models/album-spotify';

@Component({
  selector: 'app-artist-edit',
  templateUrl: './artist-edit.component.html',
  styleUrls: ['./artist-edit.component.scss']
})
export class ArtistEditComponent implements OnInit {

  id: string;
  res: any;
  artist: ArtistSpotify;
  // listAlbums: AlbumSpotify[];
  listAlbums: Array<AlbumSpotify> = [];

  constructor(private route: ActivatedRoute,
              private artistEditService: ArtistEditService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getArtist();
    this.getAlbums();
  }

  getArtist() {
    this.artistEditService.getArtistSpotify(this.id).subscribe(
      data => this.artist = data
    );
  }

  getAlbums() {
    this.artistEditService.getArtistAlbumSpotify(this.id).subscribe(
      res => {
        // res.forEach((data) => {
        //   if (data.availableMarkets.includes('FR')) {
        //     console.log(data);
        //     this.listAlbums.push(data);
        //   }
        // });
        const distinctTitles = [...new Set(this.listAlbums.map(x => x.name))];
        // this.listAlbums = res.filter(album => album.availableMarkets.includes('FR'));
        this.listAlbums = res;
      }
    );
  }

}
