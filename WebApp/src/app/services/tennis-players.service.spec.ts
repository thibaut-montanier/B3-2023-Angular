import { TestBed } from '@angular/core/testing';

import { TennisPlayersService } from './tennis-players.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('TennisPlayersService', () => {
  let service: TennisPlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],

    });
    service = TestBed.inject(TennisPlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
