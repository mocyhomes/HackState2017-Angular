import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// AngularFire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

// Others
import { FlashMessagesModule } from 'angular2-flash-messages';

//Service Imports
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { ContributionsService } from './services/contributions.service';
import { CalculationsService  } from './services/calculations.service';

// Component Imports
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoComponent } from './components/todo/todo.component';
import { NotiComponent } from './components/noti/noti.component';
import { ContributionsComponent } from './components/contributions/contributions.component';
import { JoinHouseComponent } from './components/join-house/join-house.component';
import { CreateHouseComponent } from './components/create-house/create-house.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ResourcesFeedComponent } from './components/resources-feed/resources-feed.component';
import { TimeFeedComponent } from './components/time-feed/time-feed.component';
import { RoommatesComponent } from './components/roommates/roommates.component';

export const firebaseConfig = {
  apiKey: "AIzaSyB0ss9K-oiz2p_CyN0UfQtAea7srl9PB8I",
  authDomain: "hackstate17.firebaseapp.com",
  databaseURL: "https://hackstate17.firebaseio.com",
  messagingSenderId: "329837526715"
};

const appRoutes: Routes = [
  { path: ''              , component: DashboardComponent    , canActivate:[AuthGuard] },
  { path: 'contributions' , component: ContributionsComponent, canActivate:[AuthGuard] },
  { path: 'join-house'    , component: JoinHouseComponent    , canActivate:[AuthGuard] },
  { path: 'create-house'  , component: CreateHouseComponent  , canActivate:[AuthGuard] },
  { path: 'resources-feed', component: ResourcesFeedComponent, canActivate:[AuthGuard] },
  { path: 'time-feed'     , component: TimeFeedComponent     , canActivate:[AuthGuard] },
  { path: 'roommates'     , component: RoommatesComponent    , canActivate:[AuthGuard] },
  { path: 'login'         , component: LoginComponent                                  },
  { path: 'register'      , component: RegisterComponent                               }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarComponent,
    TodoComponent,
    NotiComponent,
    ContributionsComponent,
    JoinHouseComponent,
    CreateHouseComponent,
    ChartsComponent,
    ResourcesFeedComponent,
    TimeFeedComponent,
    RoommatesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    AuthService,
    AuthGuard,
    ContributionsService,
    CalculationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
