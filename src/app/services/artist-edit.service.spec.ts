import { TestBed } from '@angular/core/testing';

import { ArtistEditService } from './artist-edit.service';

describe('ArtistEditService', () => {
  let service: ArtistEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
