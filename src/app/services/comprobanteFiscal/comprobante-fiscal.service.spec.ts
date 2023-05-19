import { TestBed } from '@angular/core/testing';

import { ComprobanteFiscalService } from './comprobante-fiscal.service';

describe('ComprobanteFiscalService', () => {
  let service: ComprobanteFiscalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComprobanteFiscalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
