import { TestBed } from '@angular/core/testing';

import { ImsServicesService } from './ims-services.service';

describe('ImsServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImsServicesService = TestBed.get(ImsServicesService);
    expect(service).toBeTruthy();
  });
});
