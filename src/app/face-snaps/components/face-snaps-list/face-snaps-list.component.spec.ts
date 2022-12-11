import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSnapsListComponent } from './face-snaps-list.component';

describe('FaceSnapsListComponent', () => {
  let component: FaceSnapsListComponent;
  let fixture: ComponentFixture<FaceSnapsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceSnapsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceSnapsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
