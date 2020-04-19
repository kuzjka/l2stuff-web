import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipeResourceComponent } from './add-recipe-resource.component';

describe('AddRecipeResourceComponent', () => {
  let component: AddRecipeResourceComponent;
  let fixture: ComponentFixture<AddRecipeResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecipeResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipeResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
