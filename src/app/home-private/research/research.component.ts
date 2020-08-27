import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ResearchService } from '../../services/research.service';
import { ArtistSpotify } from 'src/app/models/artist-spotify';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  typeResearch = new FormControl('', [Validators.required]);
  valueResearch = new FormControl('', [Validators.required]);

  resultSearch: ArtistSpotify[];

  constructor(private researchService: ResearchService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.researchService.searchInApi(this.typeResearch.value, this.valueResearch.value)
      .subscribe(data => this.resultSearch = data);
  }

}
