import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManorRowComponent } from './manor-row.component';

describe('ManorRowComponent', () => {
  let component: ManorRowComponent;
  let fixture: ComponentFixture<ManorRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManorRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManorRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
