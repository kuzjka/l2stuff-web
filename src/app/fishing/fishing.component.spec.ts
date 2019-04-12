import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishingComponent } from './fishing.component';

describe('FishingComponent', () => {
  let component: FishingComponent;
  let fixture: ComponentFixture<FishingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
