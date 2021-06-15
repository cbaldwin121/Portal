import { TestBed } from '@angular/core/testing';

import { AddChildService } from './addChild.service';

describe('AddService', () => {
  let service: AddChildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddChildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
