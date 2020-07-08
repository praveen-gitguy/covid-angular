import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { SummaryComponent } from './summary/summary.component';


const routes: Routes = [{ path: 'all', component: AllComponent }, { path: '', component: SummaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule { }
