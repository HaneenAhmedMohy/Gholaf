import { TestBed, inject } from '@angular/core/testing';

import { FservService } from './fserv.service';

describe('FservService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FservService]
    });
  });

  it('should be created', inject([FservService], (service: FservService) => {
    expect(service).toBeTruthy();
  }));
});
