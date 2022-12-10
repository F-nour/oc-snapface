import { TestBed } from '@angular/core/testing';

import { FaceSnapsService } from './face-snaps.service';

describe('FaceSnapService', () => {
  let service: FaceSnapsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaceSnapsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
