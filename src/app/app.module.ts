import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Error404Component } from './errors/404.component';
import { AddPlayerComponent } from './events/add-player.component';
import { CardDetailsComponent } from './events/card-details/card-details.component';
import { EventRouteActivator } from './events/card-details/event-route-activator.service';
import { ChildComponent } from './events/child.component';
import { DirectorsComponent } from './events/directors/directors.component';
import { PlayersListResolver } from './events/players-list-resolver.service';
import { ParentComponent } from './events/parent.component';
import { ServiceCard } from './events/service/service';
import { StaffComponent } from './events/staff/staff.component';
import { NavBar } from './nav/nav-bar';
import { appRoute } from './routes';
import { DirectorsListResolver } from './events/directors-list-resolve.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    NavBar,
    CardDetailsComponent,
    AddPlayerComponent,
    DirectorsComponent,
    Error404Component,
    StaffComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    ServiceCard,
    EventRouteActivator,
    PlayersListResolver,
    DirectorsListResolver,
    StaffComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
