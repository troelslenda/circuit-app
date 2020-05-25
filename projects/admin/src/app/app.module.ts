import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule} from '@angular/forms';


import { LoginComponent } from './pages/login/login.component';
import { FirebaseModule } from './core/firebase/firebase.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CircuitFormComponent } from './partials/circuit-form/circuit-form.component';
import { NewCircuitComponent } from './pages/new-circuit/new-circuit.component';
import { MyCircuitsComponent } from './partials/my-circuits/my-circuits.component';
import { EditCircuitComponent } from './pages/edit-circuit/edit-circuit.component';
import { CircuitPlayerComponent } from './pages/circuit-player/circuit-player.component';
import { HostCircuitComponent } from './pages/host-circuit/host-circuit.component';
import { PlayerComponent } from './partials/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CircuitFormComponent,
    NewCircuitComponent,
    MyCircuitsComponent,
    EditCircuitComponent,
    CircuitPlayerComponent,
    HostCircuitComponent,
    PlayerComponent
  ],
  imports: [
    FirebaseModule,
    ReactiveFormsModule,
    BrowserModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
