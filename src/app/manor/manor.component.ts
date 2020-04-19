import { Component, OnInit } from '@angular/core';
import {FruitManor} from './model/fruit.model';
import * as FRUITS from './fruits.json';

@Component({
  selector: 'app-manor',
  templateUrl: './manor.component.html',
  styleUrls: ['./manor.component.css']
})
export class ManorComponent implements OnInit {
  private ALL_FRUITS = FRUITS;

  rows: FruitManor[] = [
    new FruitManor()
  ];

  constructor() { }

  ngOnInit() {
  }

  addRow(): void {
    this.rows.push(new FruitManor());
  }
}
