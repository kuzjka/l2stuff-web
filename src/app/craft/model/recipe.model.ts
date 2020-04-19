import {Resource, ResStock} from './craft.model';

export type Grade = 'D' | 'C' | 'B' | 'A' | 'S';

export class Consumable {
  grade: Grade;
  amount: number;

  constructor() {
    this.grade = 'D';
    this.amount = 0;
  }
}

export class Recipe {
  name: string;
  resources: ResStock[];
  crystals: Consumable;
  gemstones: Consumable;

  constructor() {
    this.name = '';
    this.resources = [new ResStock()];
    this.crystals = new Consumable();
    this.gemstones = new Consumable();
  }
}

export class CraftItem {
  recipe: Recipe;
  materials: Material[];

  constructor(recipe: Recipe) {
    this.recipe = recipe;
    this.materials = [];
  }
}

export class Material {
  name: string;
  icon?: string;
  available: number;
  required: number;
  ingredients: Material[];

  constructor(resource: Resource) {
    this.name = resource.name;
    this.icon = resource.icon;
    this.ingredients = [];
  }
}
