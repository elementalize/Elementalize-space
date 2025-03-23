import { TestBed } from '@angular/core/testing';

import { EleInputsService } from './ele-inputs.service';

describe('EleInputsService', () => {
  let service: EleInputsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EleInputsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
