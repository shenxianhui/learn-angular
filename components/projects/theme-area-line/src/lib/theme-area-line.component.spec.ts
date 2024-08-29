import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeAreaLineComponent } from './theme-area-line.component';

describe('ThemeAreaLineComponent', () => {
  let component: ThemeAreaLineComponent;
  let fixture: ComponentFixture<ThemeAreaLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeAreaLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeAreaLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
