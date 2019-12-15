import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncobservablepipeComponent } from './asyncobservablepipe.component';

describe('AsyncobservablepipeComponent', () => {
  let component: AsyncobservablepipeComponent;
  let fixture: ComponentFixture<AsyncobservablepipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncobservablepipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncobservablepipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
