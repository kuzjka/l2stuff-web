import {Component, Input, OnInit} from '@angular/core';
import {Fruit, FruitManor, Reward } from './model/fruit.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import FRUITS from './fruits.json';

/* tslint:disable component-selector */
@Component({
  selector: 'tr[app-manor-row]',
  templateUrl: './manor-row.component.html',
  styleUrls: ['./manor-row.component.css']
})
export class ManorRowComponent implements OnInit {
  @Input() manor: FruitManor;
  rew1Txt: string;
  rew2Txt: string;

  ALL_FRUITS: Fruit[] = FRUITS;

  form: FormGroup;

  constructor( private fb: FormBuilder ) {
    this.form = fb.group({
      fruit: [new FruitManor()],
      reward: [null],
      price: [0],
      youHave: [0]
    });
    this.form.valueChanges.subscribe(val => {
      this.onDataChanged(val);
    });
    this.form.get('fruit').valueChanges.subscribe(val => {
      this.onFruitChanged(val);
    });
  }

  ngOnInit() {
  }

  onFruitChanged(val: number) {
    const fruit = this.ALL_FRUITS[val];
    this.manor.fruit = fruit;
    this.form.controls.reward.setValue(null);
    this.form.controls.price.setValue(fruit.maxPrice);

    if (this.manor.fruit) {
      this.rew1Txt = 'I: ' + this.manor.fruit.reward1.name;
      this.rew2Txt = 'II: ' + this.manor.fruit.reward2.name;
    }
  }

  onDataChanged(val: any) {
    this.manor.reward = val.reward;
    this.manor.price = val.price;
    this.manor.youHave = val.youHave;
    if (!this.manor.fruit || !this.manor.reward || this.manor.price === 0) { return; }
    const resPrice = this.manor.reward === 'TYPE_1' ?
      this.manor.fruit.reward1.price : this.manor.fruit.reward2.price;
    this.manor.resources = Math.floor(this.manor.youHave * this.manor.price / resPrice);
    this.manor.youSell = Math.ceil(this.manor.resources * resPrice / this.manor.price);
  }

}
