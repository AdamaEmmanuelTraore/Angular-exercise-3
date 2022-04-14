import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ChildComponent } from './events/child.component';
import { ParentComponent } from './events/parent.component';
import { ServiceCard } from './events/service/service';
import { NavBar } from './nav/nav-bar';
import { appRoute } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    NavBar
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [ServiceCard],
  bootstrap: [AppComponent]
})
export class AppModule { }
