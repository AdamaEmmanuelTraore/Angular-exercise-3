import { Routes } from "@angular/router";
import { CardDetailsComponent } from "./events/card-details/card-details.component";
import { ParentComponent } from "./events/parent.component";

export const appRoute: Routes = [
    {path: 'home', component: ParentComponent},
    {path: 'home/:id', component: CardDetailsComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
]