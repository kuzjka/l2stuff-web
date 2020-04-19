import {Component, Input, OnInit} from '@angular/core';
import {Material} from '../model/recipe.model';

@Component({
  selector: 'app-craft-material',
  templateUrl: './craft-material.component.html',
  styleUrls: ['./craft-material.component.css']
})
export class CraftMaterialComponent implements OnInit {
  @Input()
  indent: number;

  @Input()
  material: Material;

  icon: string;

  constructor() { }

  ngOnInit() {
    if (this.material.available === this.material.required) {
      this.icon = 'assets/images/yes.png';
    } else if (this.material.ingredients && this.material.ingredients.length > 0) {
      this.icon = 'assets/images/lower.png';
    } else {
      this.icon = 'assets/images/no.png';
    }
  }

}
