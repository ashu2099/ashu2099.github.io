import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtdivComponent } from './abtdiv.component';

describe('AbtdivComponent', () => {
  let component: AbtdivComponent;
  let fixture: ComponentFixture<AbtdivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbtdivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbtdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
