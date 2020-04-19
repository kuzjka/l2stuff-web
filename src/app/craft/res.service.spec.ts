import { TestBed } from '@angular/core/testing';

import { ResService } from './res.service';

describe('ResService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResService = TestBed.get(ResService);
    expect(service).toBeTruthy();
  });
});
