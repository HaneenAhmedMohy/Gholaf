import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegestComponent } from './regest.component';

describe('RegestComponent', () => {
  let component: RegestComponent;
  let fixture: ComponentFixture<RegestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
