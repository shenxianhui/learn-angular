import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightProgressComponent } from './highlight-progress.component';

describe('HighlightProgressComponent', () => {
  let component: HighlightProgressComponent;
  let fixture: ComponentFixture<HighlightProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
