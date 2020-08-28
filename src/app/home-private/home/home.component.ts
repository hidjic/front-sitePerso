import { Component, OnInit } from '@angular/core';
import { BoService } from 'src/app/services/bo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  genre: any;
  cat: any;
  feat: any;
  newRelease: any;
  recommendation: any;

  constructor(private boService: BoService) { }

  ngOnInit(): void {
    this.boService.getGenre().subscribe(res => this.genre = res);
    this.boService.getCategories().subscribe(res => this.cat = res);
    this.boService.getfeatPlaylist().subscribe(res => this.feat = res);
    this.boService.getNewRelease().subscribe(res => this.newRelease = res);
    this.boService.getRecommendation().subscribe(res => this.recommendation = res);
  }

}
