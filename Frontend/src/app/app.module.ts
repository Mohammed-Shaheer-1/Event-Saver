import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthmoduleModule } from './authmodule/authmodule.module';
import { CreateEventComponent } from './create-event/create-event.component';
import { NavbarComponent } from './navbar/navbar.component';
import{HttpClientModule} from'@angular/common/http';
import { EventsComponent } from './events/events.component';
import { DeleatEventComponent } from './deleat-event/deleat-event.component'


@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    NavbarComponent,
    EventsComponent,
    DeleatEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthmoduleModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
