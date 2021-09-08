import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Recipe} from '../model/recipe.model';
import {ResStock} from '../model/craft.model';
import {RecipeService} from '../recipe.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  autocompleteNames: string[];
  recipeForm: FormGroup;

  @Output()
  newRecipe: EventEmitter<Recipe>;

  constructor(private recipeService: RecipeService, private fb: FormBuilder) {
    this.newRecipe = new EventEmitter<Recipe>();
    this.autocompleteNames = [];
  }

  ngOnInit() {
    this.recipeForm = this.fb.group({
      recipeName: null
    });

    this.recipeForm
      .get('recipeName')
      .valueChanges
      .subscribe(v => this.autocompleteNames = this.recipeService.getNamesForPrefix(v));

  }

  addRecipe(): void {
    const recipe = this.recipeService.getRecipe(this.recipeForm.get('recipeName').value);
    if (!recipe) {
      this.showError('Unknown recipe ' + recipe);
      return;
    }
    this.newRecipe.emit(recipe);
    this.recipeForm.reset();
  }

  showError(message: string): void {
    console.error(message);
  }
}
