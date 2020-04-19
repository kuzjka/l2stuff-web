import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipeConsumableComponent } from './add-recipe-consumable.component';

describe('AddRecipeConsumableComponent', () => {
  let component: AddRecipeConsumableComponent;
  let fixture: ComponentFixture<AddRecipeConsumableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecipeConsumableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipeConsumableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
