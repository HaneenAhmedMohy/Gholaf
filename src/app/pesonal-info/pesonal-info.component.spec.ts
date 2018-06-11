import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesonalInfoComponent } from './pesonal-info.component';

describe('PesonalInfoComponent', () => {
  let component: PesonalInfoComponent;
  let fixture: ComponentFixture<PesonalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesonalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
