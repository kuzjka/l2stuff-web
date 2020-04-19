import {Component, Input, OnInit} from '@angular/core';
import {Consumable, Grade} from '../model/recipe.model';

@Component({
  selector: 'app-add-recipe-consumable',
  templateUrl: './add-recipe-consumable.component.html',
  styleUrls: ['./add-recipe-consumable.component.css']
})
export class AddRecipeConsumableComponent implements OnInit {
  @Input()
  consumable: Consumable;

  @Input()
  name: string;

  constructor() { }

  ngOnInit() {
  }

  setGrade(value: Grade) {
    this.consumable.grade = value;
  }

  setAmount(event: any) {
    this.consumable.amount = event.target.value;
  }

}
