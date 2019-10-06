import { TestBed } from '@angular/core/testing';

import { ControllerGaurdService } from './controller-gaurd.service';

describe('ControllerGaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControllerGaurdService = TestBed.get(ControllerGaurdService);
    expect(service).toBeTruthy();
  });
});
