import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdivComponent } from './webdiv.component';

describe('WebdivComponent', () => {
  let component: WebdivComponent;
  let fixture: ComponentFixture<WebdivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebdivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
