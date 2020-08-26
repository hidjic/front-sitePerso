import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistEditService } from 'src/app/services/artist-edit.service';
import { ArtistSpotify } from 'src/app/models/artist-spotify';

@Component({
  selector: 'app-artist-edit',
  templateUrl: './artist-edit.component.html',
  styleUrls: ['./artist-edit.component.scss']
})
export class ArtistEditComponent implements OnInit {

  id: string;
  res: any;
  @Input() artist: ArtistSpotify;

  constructor(private route: ActivatedRoute,
              private artistEditService: ArtistEditService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    // this.getArtist();
  }

  getArtist() {
    console.log('getArtist...');
    this.artistEditService.getArtistSpotify(this.id).subscribe(
      data => {
        console.log(data);
        this.res = data;
      }
    );
  }

}
