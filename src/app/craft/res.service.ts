import { Injectable } from '@angular/core';
import RES from './resources.json';
import {ResEntry, Resource} from './model/craft.model';

@Injectable({
  providedIn: 'root'
})
export class ResService {
  private resources: Map<string, Resource>;

  constructor() {
    const ALL_ENTRIES: ResEntry[] = RES;
    this.resources = new Map();
    ALL_ENTRIES.forEach(e => this.resources.set(e.name, {
      name: e.name,
      icon: e.icon
    }));
    ALL_ENTRIES.forEach(e => {
      if (e.craft) {
        this.resources.get(e.name).craft = e.craft.map(re => {
          return {
            res: this.resources.get(re.res),
            amount: re.amount
          };
        });
      }
    });
  }

  getAllResources(): Resource[] {
    return Array.from(this.resources.values()).sort((a, b) => a.name.localeCompare(b.name));
  }

  getResource(name: string): Resource {
    return this.resources.get(name);
  }
}
