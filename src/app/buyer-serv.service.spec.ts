import { TestBed } from '@angular/core/testing';

import { BuyerServService } from './buyer-serv.service';

describe('BuyerServService', () => {
  let service: BuyerServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyerServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
