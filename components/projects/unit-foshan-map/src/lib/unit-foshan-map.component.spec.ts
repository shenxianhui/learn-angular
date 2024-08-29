import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitFoShanMapComponent } from './unit-foshan-map.component';

describe('UnitFoShanMapComponent', () => {
  let component: UnitFoShanMapComponent;
  let fixture: ComponentFixture<UnitFoShanMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitFoShanMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitFoShanMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
