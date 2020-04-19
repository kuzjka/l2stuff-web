import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftAvailableComponent } from './craft-available.component';

describe('CraftAvailableComponent', () => {
  let component: CraftAvailableComponent;
  let fixture: ComponentFixture<CraftAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraftAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
