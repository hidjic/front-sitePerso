import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ResearchService } from '../../services/research.service';
import { ArtistSearchSpotify } from 'src/app/models/artist-search-spotify';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  typeResearch = new FormControl('', [Validators.required]);
  valueResearch = new FormControl('', [Validators.required]);

  resultSearch: ArtistSearchSpotify[];

  constructor(private researchService: ResearchService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('time to looking for...');
    this.researchService.searchInApi(this.typeResearch.value, this.valueResearch.value)
      .subscribe(data => this.resultSearch = data);
  }

}
