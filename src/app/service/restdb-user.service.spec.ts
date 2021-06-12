import { TestBed } from '@angular/core/testing';

import { RestdbUserService } from './restdb-user.service';

describe('RestdbUserService', () => {
  let service: RestdbUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestdbUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
