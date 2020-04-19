import {Resource, ResStock} from './craft.model';
import {Recipe} from './recipe.model';

export class CraftData {
  stocks: ResStock[];
  recipes: Recipe[];
  recipeBook: Recipe[];

  constructor(resources: Resource[]) {
    this.stocks = resources.map(r => {
      return {
        res: r,
        amount: 0
      };
    });
    this.recipes = [];
    this.recipeBook = [];
  }
}
