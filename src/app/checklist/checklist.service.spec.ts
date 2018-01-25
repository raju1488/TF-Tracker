import { TestBed, inject } from '@angular/core/testing';

import { ChecklistService } from './_services/checklist.service';

describe('ChecklistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChecklistService]
    });
  });

  it('should be created', inject([ChecklistService], (service: ChecklistService) => {
    expect(service).toBeTruthy();
  }));
});
