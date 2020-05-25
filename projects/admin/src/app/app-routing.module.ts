import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';
import { NewCircuitComponent } from './pages/new-circuit/new-circuit.component';
import { EditCircuitComponent } from './pages/edit-circuit/edit-circuit.component';
import { CircuitService } from './core/circuit.service';
import { CircuitPlayerComponent } from './pages/circuit-player/circuit-player.component';
import { HostCircuitComponent } from './pages/host-circuit/host-circuit.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['']);


const routes: Routes = [
  {
  path: 'login',
  component: LoginComponent,
  ...canActivate(redirectLoggedInToItems)

},
{
  path: '',
  component: DashboardComponent,
  ...canActivate(redirectUnauthorizedToLogin)
},
{
  path: 'new',
  component: NewCircuitComponent,
  ...canActivate(redirectUnauthorizedToLogin)
},
{
  path: ':id',
  component: CircuitPlayerComponent,
  resolve: {
    circuit: CircuitService
  }
},
{
  path: ':id/edit',
  component: EditCircuitComponent,
  resolve: {
    circuit: CircuitService
  },
  ...canActivate(redirectUnauthorizedToLogin)
},
{
  path: ':id/host',
  component: HostCircuitComponent,
  resolve: {
    circuit: CircuitService
  },
  ...canActivate(redirectUnauthorizedToLogin)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  //providers: [CircuitService]
})
export class AppRoutingModule { }
