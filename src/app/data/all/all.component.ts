import { Component, OnInit } from '@angular/core';
import { DataService, summaryResponse } from '../data.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  data: summaryResponse;
  size = 0;

  constructor(private dataService: DataService) {
    this.dataService.getSummary().subscribe(val => {
      this.data = val;
      this.size = Object.keys(this.data).length
      console.log(this.data)
    });
  }

  ngOnInit(): void {
  }

}
