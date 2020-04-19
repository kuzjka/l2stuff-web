import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CraftItem} from '../model/recipe.model';

@Component({
  selector: 'app-craft-item',
  templateUrl: './craft-item.component.html',
  styleUrls: ['./craft-item.component.css']
})
export class CraftItemComponent implements OnInit {
  @Input()
  item: CraftItem;

  expanded = false;

  @Output()
  delete: EventEmitter<any>;

  constructor() {
    this.delete = new EventEmitter();
  }

  ngOnInit() {
  }

  expand(): void {
    this.expanded = true;
  }

  collapse(): void {
    this.expanded = false;
  }

  deleteItem(): void {
    this.delete.emit();
  }
}
