import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { TaskComponent } from './components/task/task.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'tasks', component: TaskComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
