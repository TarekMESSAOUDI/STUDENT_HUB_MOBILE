import { TestBed } from '@angular/core/testing';

import { GuardNoAdminServiceService } from './guard-no-admin-service.service';

describe('GuardNoAdminServiceService', () => {
  let service: GuardNoAdminServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardNoAdminServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
