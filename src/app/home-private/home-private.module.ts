import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../material-module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomePrivateRoutingModule } from './home-private-routing.module';

import { HomePrivateComponent } from './home-private.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResearchComponent } from './research/research.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePrivateComponent,
    DashboardComponent,
    ResearchComponent,
    SidenavComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomePrivateRoutingModule,
    DemoMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomePrivateComponent,
  ]
})
export class HomePrivateModule { }
