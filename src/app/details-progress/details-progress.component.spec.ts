import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProgressComponent } from './details-progress.component';

describe('DetailsProgressComponent', () => {
  let component: DetailsProgressComponent;
  let fixture: ComponentFixture<DetailsProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
