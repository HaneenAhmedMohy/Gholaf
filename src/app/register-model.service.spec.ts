import { TestBed, inject } from '@angular/core/testing';

import { RegisterModelService } from './register-model.service';

describe('RegisterModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterModelService]
    });
  });

  it('should be created', inject([RegisterModelService], (service: RegisterModelService) => {
    expect(service).toBeTruthy();
  }));
});
