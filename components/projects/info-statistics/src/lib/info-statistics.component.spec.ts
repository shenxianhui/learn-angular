import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoStatisticsComponent } from './info-statistics.component';

describe('InfoStatisticsComponent', () => {
  let component: InfoStatisticsComponent;
  let fixture: ComponentFixture<InfoStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
