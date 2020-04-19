import { Injectable } from '@angular/core';
import {CraftData} from './model/storage.model';
import {ResService} from './res.service';

@Injectable({
  providedIn: 'root'
})
export class CraftStorageService {
  constructor(private resService: ResService) { }

  saveCraftData(data: CraftData): void {
    localStorage.setItem('craft-data', JSON.stringify(data));
  }

  getCraftData(): CraftData {
    return JSON.parse(localStorage.getItem('craft-data')) || new CraftData(this.resService.getAllResources());
  }
}
