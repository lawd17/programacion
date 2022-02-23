import { TestBed } from '@angular/core/testing';

import { PlanetaService } from './planetas.service';

describe('PlanetaServiceService', () => {
  let service: PlanetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
