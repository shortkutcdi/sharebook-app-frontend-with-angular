import { TestBed } from '@angular/core/testing';

import { BookService } from './bookservice.service';

describe('BookserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookService = TestBed.get(BookService);
    expect(service).toBeTruthy();
  });
});
