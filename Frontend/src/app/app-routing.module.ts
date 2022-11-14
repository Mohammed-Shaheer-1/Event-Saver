import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authmodule/login/login.component';
import { RegistrationComponent } from './authmodule/registration/registration.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { DeleatEventComponent } from './deleat-event/deleat-event.component';
import { EventsComponent } from './events/events.component';



const routes: Routes = [
{path:'',component:LoginComponent},
{path:'login',component:LoginComponent},
{path:'registration',component:RegistrationComponent},
{path:'create-event',component:CreateEventComponent},
{path:'events',component:EventsComponent},
{path:'deleat-event',component:DeleatEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
