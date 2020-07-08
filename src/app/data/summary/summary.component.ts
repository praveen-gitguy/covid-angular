import { Component, OnInit } from "@angular/core";
import { DataService, summaryResponse } from "../data.service";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"],
})
export class SummaryComponent implements OnInit {
  data: summaryResponse;
  size: number;
  // keys: string[];
  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.getSummary().subscribe((val) => {
      this.data = val;
      this.size = Object.keys(this.data).length;
      console.log(this.data);
    });

    // this.dataService.searchByCountry('india').subscribe(data => {
    //   console.log(data)
    // })
  }

}
