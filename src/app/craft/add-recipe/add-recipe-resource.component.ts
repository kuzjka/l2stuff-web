import {Component, Input, OnInit} from '@angular/core';
import {ResStock} from '../model/craft.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ResService} from '../res.service';

/* tslint:disable component-selector */
@Component({
  selector: 'tr[app-add-recipe-resource]',
  templateUrl: './add-recipe-resource.component.html',
  styleUrls: ['./add-recipe-resource.component.css']
})
export class AddRecipeResourceComponent implements OnInit {
  @Input()
  stock: ResStock;
  form: FormGroup;
  resourceNames: string[];

  constructor(private fb: FormBuilder, private resService: ResService) {
    this.form = fb.group({
      name: [null],
      amount: 0
    });
    this.form.get('name').valueChanges.subscribe(val =>
      this.stock.res = resService.getResource(val)
    );
    this.form.get('amount').valueChanges.subscribe(val =>
      this.stock.amount = val
    );
    this.resourceNames = resService.getAllResources().map(r => r.name);
  }

  ngOnInit() {
  }

}
