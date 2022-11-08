import { TestBed } from '@angular/core/testing';

import { InsertLocalstorageService } from './insert-localstorage.service';

describe('InsertLocalstorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsertLocalstorageService = TestBed.get(InsertLocalstorageService);
    expect(service).toBeTruthy();
  });
});
