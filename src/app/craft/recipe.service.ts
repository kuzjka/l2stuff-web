import { Injectable } from '@angular/core';
import RECIPES from './recipes.json';
import {Recipe, RecipeEntry} from './model/recipe.model';
import {ResService} from './res.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Map<string, Recipe>;
  private names: string[];

  constructor(private resService: ResService) {
    const ALL_RECIPES: RecipeEntry[] = RECIPES;
    this.recipes = new Map();
    this.names = [];
    ALL_RECIPES
      .map<Recipe>(r => ({
        name: r.name,
        resources: r.resources.map(res => ({
          res: this.resService.getResource(res.res),
          amount: res.amount
        })),
        crystals: r.crystals,
        gemstones: r.gemstones
      }))
      .forEach(e => {
      this.recipes.set(e.name, e);
      this.names.push(e.name);
    });
  }

  getNamesForPrefix(prefix: string): string[] {
    if (!prefix) { return []; }
    return this.names.filter(n => n.toLowerCase().startsWith(prefix.toLowerCase()));
  }

  getRecipe(name: string): Recipe {
    return this.recipes.get(name);
  }
}
