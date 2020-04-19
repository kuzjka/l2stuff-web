import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { ManorComponent } from './manor/manor.component';
import { FishingComponent } from './fishing/fishing.component';
import { ManorRowComponent } from './manor/manor-row.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CraftComponent } from './craft/craft.component';
import { CraftAvailableComponent } from './craft/craft-available.component';
import { AddRecipeComponent } from './craft/add-recipe/add-recipe.component';
import { AddRecipeResourceComponent } from './craft/add-recipe/add-recipe-resource.component';
import { AddRecipeConsumableComponent } from './craft/add-recipe/add-recipe-consumable.component';
import { CraftItemComponent } from './craft/craft-item/craft-item.component';
import { CraftMaterialComponent } from './craft/craft-item/craft-material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';

const routes: Routes = [
  { path: 'manor', component: ManorComponent },
  { path: 'fishing', component: FishingComponent },
  { path: 'craft', component: CraftComponent },
  { path: '', pathMatch: 'full', redirectTo: '/manor' }
];

@NgModule({
  declarations: [
    AppComponent,
    ManorComponent,
    FishingComponent,
    ManorRowComponent,
    CraftComponent,
    CraftAvailableComponent,
    AddRecipeComponent,
    AddRecipeResourceComponent,
    AddRecipeConsumableComponent,
    CraftItemComponent,
    CraftMaterialComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
