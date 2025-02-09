import { TestBed } from '@angular/core/testing';

import { UrlCleanerService } from './url-cleaner.service';

describe('UrlCleanerService', () => {
  let service: UrlCleanerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlCleanerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
