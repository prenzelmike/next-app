import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTypeSearchComponent } from './simple-type-search.component';

describe('SimpleTypeSearchComponent', () => {
  let component: SimpleTypeSearchComponent;
  let fixture: ComponentFixture<SimpleTypeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleTypeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTypeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
