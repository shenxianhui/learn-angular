import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightLabelComponent } from './highlight-label.component';

describe('HighlightLabelComponent', () => {
  let component: HighlightLabelComponent;
  let fixture: ComponentFixture<HighlightLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
