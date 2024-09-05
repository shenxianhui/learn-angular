import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorfulRankComponent } from './colorful-rank.component';

describe('ColorfulRankComponent', () => {
  let component: ColorfulRankComponent;
  let fixture: ComponentFixture<ColorfulRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorfulRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorfulRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
