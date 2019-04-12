import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { ManorComponent } from './manor/manor.component';
import { FishingComponent } from './fishing/fishing.component';
import { ManorRowComponent } from './manor/manor-row.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: 'manor', component: ManorComponent },
  { path: 'fishing', component: FishingComponent },
  { path: '', pathMatch: 'full', redirectTo: '/manor' }
];

@NgModule({
  declarations: [
    AppComponent,
    ManorComponent,
    FishingComponent,
    ManorRowComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
