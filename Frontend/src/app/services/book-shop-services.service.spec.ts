import { TestBed } from '@angular/core/testing';

import { BookShopServicesService } from './book-shop-services.service';

describe('BookShopServicesService', () => {
  let service: BookShopServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookShopServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
