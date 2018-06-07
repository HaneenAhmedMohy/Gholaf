import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestbooksComponent } from './newestbooks.component';

describe('NewestbooksComponent', () => {
  let component: NewestbooksComponent;
  let fixture: ComponentFixture<NewestbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
