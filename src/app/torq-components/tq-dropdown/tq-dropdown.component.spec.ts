import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TqDropdownComponent } from './tq-dropdown.component';

describe('TqDropdownComponent', () => {
  let component: TqDropdownComponent;
  let fixture: ComponentFixture<TqDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TqDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TqDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
