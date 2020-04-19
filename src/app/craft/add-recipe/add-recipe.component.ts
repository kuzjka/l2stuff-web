import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Recipe} from '../model/recipe.model';
import {ResStock} from '../model/craft.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  bookRecipe: Recipe;
  recipe: Recipe;

  @Output()
  newRecipe: EventEmitter<Recipe>;

  @Input()
  recipeBook: Map<string, Recipe>;

  constructor() {
    this.newRecipe = new EventEmitter<Recipe>();
    this.reset();
  }

  ngOnInit() {
    console.log('recipe book size: ' + this.recipeBook.size);
  }

  onNameChanged(event: any): void {
    this.recipe.name = event.target.value;
  }

  addResource(): void {
    this.recipe.resources.push(new ResStock());
  }

  addRecipe(): void {
    if (this.recipe.resources.some(r => !r.res)) {
      this.showError('Resources not set');
      return;
    }
    this.newRecipe.emit(this.recipe);
    this.reset();
  }

  showError(message: string): void {
    console.error(message);
  }

  reset(): void {
    this.recipe = new Recipe();
  }
}
