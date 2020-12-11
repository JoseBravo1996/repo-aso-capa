import { TestBed } from '@angular/core/testing';

import { BackToTheFutureService } from './back-to-the-future.service';

describe('BackToTheFutureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackToTheFutureService = TestBed.get(BackToTheFutureService);
    expect(service).toBeTruthy();
  });
});
