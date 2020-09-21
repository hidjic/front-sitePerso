import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistEditService } from 'src/app/services/artist-edit.service';
import { ArtistSpotify } from 'src/app/models/artist-spotify';
import { AlbumSpotify } from 'src/app/models/album-spotify';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-artist-edit',
  templateUrl: './artist-edit.component.html',
  styleUrls: ['./artist-edit.component.scss']
})
export class ArtistEditComponent implements OnInit, AfterViewInit {

  id: string;
  res: any;
  artist: ArtistSpotify;
  listAlbums: Array<AlbumSpotify> = [];
  listSingles: Array<AlbumSpotify> = [];
  listAppearOn: Array<AlbumSpotify> = [];
  listCompilation: Array<AlbumSpotify> = [];

  displayedColumns: string[] = ['images', 'name', 'releaseDate'];
  dataSourceAlbums = new MatTableDataSource();
  dataSourceSingles = new MatTableDataSource();
  dataSourceAppearsOn = new MatTableDataSource();
  dataSourceCompilation = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute,
              private artistEditService: ArtistEditService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  getData() {
    this.artistEditService.getAllData(this.id).subscribe(
      res => {
        this.artist = res[0];
        this.listAlbums = res[1];
        this.dataSourceAlbums.data = this.listAlbums;
        this.listSingles = res[2];
        this.dataSourceSingles.data = this.listSingles;
        this.listAppearOn = res[3];
        this.dataSourceAppearsOn.data = this.listAppearOn;
        this.listCompilation = res[4];
        this.dataSourceCompilation.data = this.listCompilation;
      }
    );
  }

  ngAfterViewInit() {
    this.dataSourceAlbums.sort = this.sort;
    this.dataSourceSingles.sort = this.sort;
    this.dataSourceAppearsOn.sort = this.sort;
    this.dataSourceCompilation.sort = this.sort;
  }



}
