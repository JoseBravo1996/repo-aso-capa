import { TestBed } from '@angular/core/testing';

import { OfiTelegrafoService } from './ofi-telegrafo.service';

describe('OfiTelegrafoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfiTelegrafoService = TestBed.get(OfiTelegrafoService);
    expect(service).toBeTruthy();
  });
});
