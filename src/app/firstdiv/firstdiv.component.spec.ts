import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstdivComponent } from './firstdiv.component';

describe('FirstdivComponent', () => {
  let component: FirstdivComponent;
  let fixture: ComponentFixture<FirstdivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstdivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
