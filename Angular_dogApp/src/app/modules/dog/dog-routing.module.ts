import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DogListComponent} from "./components/dog-list/dog-list.component";

const routes: Routes = [
  {path:'', component:DogListComponent},
  {path:'dogs', component:DogListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogRoutingModule { }
