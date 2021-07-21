import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogRoutingModule } from './dog-routing.module';
import { DogListComponent } from './components/dog-list/dog-list.component';
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { DogListElementComponent } from './components/dog-list-element/dog-list-element.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DogListComponent,
    DogListElementComponent
  ],
  imports: [
    CommonModule,
    DogRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ]
})
export class DogModule { }
