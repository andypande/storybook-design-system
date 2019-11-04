import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TqBreadcrumbsComponent } from './tq-breadcrumbs.component';

describe('TqBreadcrumbsComponent', () => {
  let component: TqBreadcrumbsComponent;
  let fixture: ComponentFixture<TqBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TqBreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TqBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
