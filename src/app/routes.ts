import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404.component";
import { AddPlayerComponent } from "./events/add-player.component";
import { CardDetailsComponent } from "./events/card-details/card-details.component";
import { EventRouteActivator } from "./events/card-details/event-route-activator.service";
import { DirectorsComponent } from "./events/directors/directors.component";
import { ParentComponent } from "./events/parent.component";
import { StaffComponent } from "./events/staff/staff.component";

export const appRoute: Routes = [
    {path: 'home/staff', component: StaffComponent},
    {path: 'home/dirigenza', component: DirectorsComponent},
    {path: 'home/crea', component: AddPlayerComponent},
    {path: 'home', component: ParentComponent},
    {path: 'home/:id', component: CardDetailsComponent, canActivate: [EventRouteActivator]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
]