import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './components/observables/observables.component';
import { ObservablesSubjectsComponent } from './components/observables-subjects/observables-subjects.component';
import { ObservablesOperatorsComponent } from './components/observables-operators/observables-operators.component';

const routes: Routes = [
  { path: 'observables', component: ObservablesComponent },
  { path: 'subjects', component: ObservablesSubjectsComponent },
  { path: 'oparators', component: ObservablesOperatorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
