import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ResStock} from './model/craft.model';
import {FormBuilder, FormGroup} from '@angular/forms';

/* tslint:disable component-selector */
@Component({
  selector: 'tr [app-craft-available]',
  templateUrl: './craft-available.component.html',
  styleUrls: ['./craft-available.component.css']
})
export class CraftAvailableComponent implements OnInit {
  @Input()
  stock: ResStock;

  @Output()
  amountChanged: EventEmitter<number>;

  constructor() {
    this.amountChanged = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  change(event: any): void {
    this.stock.amount = event.target.value;
    this.amountChanged.emit(this.stock.amount);
  }

}
