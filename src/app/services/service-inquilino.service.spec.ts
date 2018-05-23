import { TestBed, inject } from '@angular/core/testing';

import { ServiceInquilinoService } from './service-inquilino.service';

describe('ServiceInquilinoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceInquilinoService]
    });
  });

  it('should be created', inject([ServiceInquilinoService], (service: ServiceInquilinoService) => {
    expect(service).toBeTruthy();
  }));
});
