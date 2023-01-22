import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ViewsHomeComponent,
    StatisticsComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    SharedModule
  ]
})
export class ViewModule { }
