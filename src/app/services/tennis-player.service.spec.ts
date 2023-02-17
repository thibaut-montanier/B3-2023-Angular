import { TestBed } from '@angular/core/testing';

import { TennisPlayerService } from './tennis-player.service';

describe('TennisPlayerService', () => {
  let service: TennisPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TennisPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
