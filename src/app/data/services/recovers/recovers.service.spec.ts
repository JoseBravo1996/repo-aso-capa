import { TestBed } from '@angular/core/testing';

import { RecoversService } from './recovers.service';

describe('RecoversService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecoversService = TestBed.get(RecoversService);
    expect(service).toBeTruthy();
  });
});
