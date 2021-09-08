import { Component, OnInit } from '@angular/core';
import {ResStock} from './model/craft.model';
import {Consumable, CraftItem, Grade, Material, Recipe} from './model/recipe.model';
import {ResService} from './res.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {CraftStorageService} from './craft-storage.service';
import {CraftData} from './model/storage.model';

@Component({
  selector: 'app-craft',
  templateUrl: './craft.component.html',
  styleUrls: ['./craft.component.css']
})
export class CraftComponent implements OnInit {
  private stocks: ResStock[][];
  private items: CraftItem[];
  private data: CraftData;
  private recipeBook: Map<string, Recipe>;
  private crystals: Consumable[];
  private gemstones: Consumable[];

  constructor(private resService: ResService, private storageService: CraftStorageService) {
    this.data = storageService.getCraftData();
    this.initStocks();
    this.items = this.data.recipes.map(r => new CraftItem(r));
    this.recipeBook = new Map<string, Recipe>();
    this.data.recipeBook.forEach(r => this.recipeBook.set(r.name, r));
    this.calculate();
  }

  private initStocks() {
    const inColumn = Math.ceil(this.data.stocks.length / 4);
    this.stocks = [];
    for (let col = 0; col < 4; ++col) {
      this.stocks.push([]);
      for (let i = col * inColumn; i < (col + 1) * inColumn && i < this.data.stocks.length; ++i) {
        this.stocks[col].push(this.data.stocks[i]);
      }
    }
  }

  private initItems() {

  }

  ngOnInit() {
  }

  onNewRecipe(recipe: Recipe): void {
    this.recipeBook.set(recipe.name, recipe);
    this.items.push(new CraftItem(recipe));
    this.calculate();
  }

  calculate(): void {
    const remaining: Map<string, number> = new Map<string, number>();
    const crystals = new ConsumableCounter();
    const gemstones = new ConsumableCounter();
    this.stocks.forEach(st => st.forEach(s => remaining.set(s.res.name, s.amount)));
    this.items.forEach(i => {
      crystals.add(i.recipe.crystals);
      gemstones.add(i.recipe.gemstones);
      i.materials = [];
      i.recipe.resources.forEach(r => {
        i.materials.push(this.getMaterial(r, remaining));
      });
    });
    this.crystals = crystals.get();
    this.gemstones = gemstones.get();
    this.saveData();
  }

  private getMaterial(r: ResStock, remaining: Map<string, number>): Material {
    const material: Material = new Material(r.res);
    material.required = r.amount;
    const matAvailable = remaining.get(r.res.name);
    material.available = Math.min(material.required, matAvailable);
    remaining.set(r.res.name, matAvailable - material.available);
    if (material.available < material.required && r.res.craft) {
      material.ingredients = r.res.craft.map(i => {
        const ingr: ResStock = {
          res: i.res,
          amount: i.amount * (material.required - material.available)
        };
        return this.getMaterial(ingr, remaining);
      });
    }
    return material;
  }

  drop(event: CdkDragDrop<CraftItem[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    this.calculate();
  }

  deleteCraftItem(index: number) {
    this.items.splice(index, 1);
    this.calculate();
  }

  saveData(): void {
    this.data.stocks = [];
    this.stocks.forEach(st => st.forEach(s => this.data.stocks.push(s)));
    this.data.recipes = this.items.map(i => i.recipe);
    this.data.recipeBook = Array.from(this.recipeBook.values());
    this.storageService.saveCraftData(this.data);
  }
}

class ConsumableCounter {
  private counters;

  private grades: Grade[] = ['D', 'C', 'B', 'A', 'S'];

  constructor() {
    this.counters = {};
    this.grades.forEach(item => {
      this.counters[item] = 0;
    });
  }

  add(consumable?: Consumable) {
    if (consumable) {
      this.counters[consumable.grade] += consumable.amount;
    }
  }

  get(): Consumable[] {
    return this.grades.map(g => ({
      grade: g,
      amount: this.counters[g]
    })).filter(c => c.amount > 0);
  }
}
