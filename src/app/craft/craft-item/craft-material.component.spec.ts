import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftMaterialComponent } from './craft-material.component';

describe('CraftMaterialComponent', () => {
  let component: CraftMaterialComponent;
  let fixture: ComponentFixture<CraftMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraftMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
