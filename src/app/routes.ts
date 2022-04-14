import { Routes } from "@angular/router";
import { ParentComponent } from "./events/parent.component";

export const appRoute: Routes = [
    {path: 'home', component: ParentComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
]