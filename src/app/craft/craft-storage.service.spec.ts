import { TestBed } from '@angular/core/testing';

import { CraftStorageService } from './craft-storage.service';

describe('CraftStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CraftStorageService = TestBed.get(CraftStorageService);
    expect(service).toBeTruthy();
  });
});
