import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { DataRoutingModule } from "./data-routing.module";
import { SummaryComponent } from "./summary/summary.component";
import { AllComponent } from './all/all.component';

@NgModule({
  declarations: [SummaryComponent, AllComponent],
  imports: [CommonModule, DataRoutingModule, HttpClientModule],
  exports: [SummaryComponent],
})
export class DataModule {}
