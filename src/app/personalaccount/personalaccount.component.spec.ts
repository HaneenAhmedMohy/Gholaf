import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalaccountComponent } from './personalaccount.component';

describe('PersonalaccountComponent', () => {
  let component: PersonalaccountComponent;
  let fixture: ComponentFixture<PersonalaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
