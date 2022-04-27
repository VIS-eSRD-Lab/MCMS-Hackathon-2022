import { TestBed } from '@angular/core/testing';

import { InvoiceServicesService } from './invoice-services.service';

describe('InvoiceServicesService', () => {
  let service: InvoiceServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
