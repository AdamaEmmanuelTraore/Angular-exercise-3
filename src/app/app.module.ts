import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './events/child.component';
import { ParentComponent } from './events/parent.component';
import { Service } from './events/service/service';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
