import { TestBed } from '@angular/core/testing';

import { MergeMapserService } from './merge-mapser.service';

describe('MergeMapserService', () => {
  let service: MergeMapserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MergeMapserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
