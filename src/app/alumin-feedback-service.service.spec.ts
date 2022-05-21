import { TestBed } from '@angular/core/testing';

import { AluminFeedbackServiceService } from './alumin-feedback-service.service';

describe('AluminFeedbackServiceService', () => {
  let service: AluminFeedbackServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AluminFeedbackServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
