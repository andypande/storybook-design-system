import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TqButtonComponent } from './tq-button.component';

describe('TqButtonComponent', () => {
  let component: TqButtonComponent;
  let fixture: ComponentFixture<TqButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TqButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TqButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
