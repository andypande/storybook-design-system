import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TqAppNavComponent } from './tq-app-nav.component';

describe('TqAppNavComponent', () => {
  let component: TqAppNavComponent;
  let fixture: ComponentFixture<TqAppNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TqAppNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TqAppNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
