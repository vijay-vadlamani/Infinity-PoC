import { TestBed, inject } from '@angular/core/testing';

import { TableSearchService } from './table-search.service';

describe('TableSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableSearchService]
    });
  });

  it('should be created', inject([TableSearchService], (service: TableSearchService) => {
    expect(service).toBeTruthy();
  }));
});
