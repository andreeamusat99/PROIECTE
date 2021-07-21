import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponetsComponent } from './componets/componets.component';
import { FoodComponentComponent } from './food-component/food-component.component';



@NgModule({
  declarations: [
    ComponetsComponent,
    FoodComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FoodModule { }
