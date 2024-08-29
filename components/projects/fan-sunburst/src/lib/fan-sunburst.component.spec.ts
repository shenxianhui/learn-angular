import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanSunburstComponent } from './fan-sunburst.component';

describe('FanSunburstComponent', () => {
  let component: FanSunburstComponent;
  let fixture: ComponentFixture<FanSunburstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanSunburstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanSunburstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
