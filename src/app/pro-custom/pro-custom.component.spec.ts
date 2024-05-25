import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProCustomComponent } from './pro-custom.component';

describe('ProCustomComponent', () => {
  let component: ProCustomComponent;
  let fixture: ComponentFixture<ProCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
