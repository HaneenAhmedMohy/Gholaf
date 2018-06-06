import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousauthorsComponent } from './famousauthors.component';

describe('FamousauthorsComponent', () => {
  let component: FamousauthorsComponent;
  let fixture: ComponentFixture<FamousauthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamousauthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamousauthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
