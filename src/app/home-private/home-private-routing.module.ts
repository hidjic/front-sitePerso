import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePrivateComponent } from './home-private.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResearchComponent } from './research/research.component';
import { HomeComponent } from './home/home.component';
import { ArtistEditComponent } from './artist-edit/artist-edit.component';

import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
  { path: '',
    component: HomePrivateComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        canActivate: [AuthGuardService],
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'research', component: ResearchComponent },
          // { path: 'editionartist/:id', component: ArtistEditComponent},
          { path: 'editionartist', component: ArtistEditComponent},
          { path: '', component: HomeComponent }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePrivateRoutingModule { }
