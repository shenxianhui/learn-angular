import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprehensiveListComponent } from './comprehensive-list.component';

describe('ComprehensiveListComponent', () => {
  let component: ComprehensiveListComponent;
  let fixture: ComponentFixture<ComprehensiveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprehensiveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprehensiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
