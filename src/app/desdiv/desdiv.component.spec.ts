import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesdivComponent } from './desdiv.component';

describe('DesdivComponent', () => {
  let component: DesdivComponent;
  let fixture: ComponentFixture<DesdivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesdivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
