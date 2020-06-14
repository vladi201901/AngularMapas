import { TestBed } from '@angular/core/testing';

import { LocacionService } from './locacion.service';

describe('LocacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocacionService = TestBed.get(LocacionService);
    expect(service).toBeTruthy();
  });
});
