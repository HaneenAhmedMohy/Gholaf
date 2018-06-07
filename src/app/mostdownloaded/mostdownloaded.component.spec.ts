import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostdownloadedComponent } from './mostdownloaded.component';

describe('MostdownloadedComponent', () => {
  let component: MostdownloadedComponent;
  let fixture: ComponentFixture<MostdownloadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostdownloadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostdownloadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
