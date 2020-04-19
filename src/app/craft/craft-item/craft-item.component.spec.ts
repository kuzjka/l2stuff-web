import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftItemComponent } from './craft-item.component';

describe('CraftItemComponent', () => {
  let component: CraftItemComponent;
  let fixture: ComponentFixture<CraftItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraftItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
