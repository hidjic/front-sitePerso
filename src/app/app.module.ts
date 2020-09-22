import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { HomePublicComponent } from './home-public/home-public.component';
// import { HomePrivateComponent } from './home-private/home-private.component';
import { FourofourComponent } from './fourofour/fourofour.component';
// import { DashboardComponent } from './home-private/dashboard/dashboard.component';
// import { ResearchComponent } from './home-private/research/research.component';
// import { SidenavComponent } from './home-private/sidenav/sidenav.component';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { PlayerSpotifyComponent } from './player-spotify/player-spotify.component';


const appRoutes: Routes = [
  { path: 'auth/signup', canActivate: [AuthGuardService], component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'home/public', component: HomePublicComponent },
  { path: 'fourofour', component: FourofourComponent},
  // { path: 'bo', canActivate: [AuthGuardService], component: HomePrivateComponent },
  // { path: 'bo', canActivate: [AuthGuardService], component: HomePrivateComponent,
    // children: [
    //   { path: '', redirectTo: 'fourofour', pathMatch: 'full' },
    //   { path: 'dashboard', component: DashboardComponent },
    //   { path: 'research', component: ResearchComponent},
    // ] },
  { path: 'bo',
      loadChildren: () => import('./home-private/home-private.module').then(mod => mod.HomePrivateModule) },
  { path: '', redirectTo: 'fourofour', pathMatch: 'full' },
  { path: '**', redirectTo: 'fourofour' }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    HomePublicComponent,
    FourofourComponent,
    PlayerSpotifyComponent,
    // HomePrivateComponent,
    // DashboardComponent,
    // ResearchComponent,
    // SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
    DemoMaterialModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
