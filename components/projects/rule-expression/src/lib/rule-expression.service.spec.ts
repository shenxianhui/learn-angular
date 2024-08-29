import { TestBed } from '@angular/core/testing';

import { RuleExpressionService } from './rule-expression.service';

describe('RuleExpressionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RuleExpressionService = TestBed.get(RuleExpressionService);
    expect(service).toBeTruthy();
  });
});
