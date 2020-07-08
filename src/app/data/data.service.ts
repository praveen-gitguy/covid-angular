import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { pluck } from "rxjs/operators";

export interface summaryResponse {
  Countries: [];
  Date: Date;
  Global: {
    NewConfirmed: number;
    NewDeaths: number;
    NewRecovered: number;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
  }
}

@Injectable({
  providedIn: "root",
})
export class DataService {
  url = "https://api.covid19api.com";

  constructor(private http: HttpClient) { }

  getSummary() {
    return this.http.get<summaryResponse>(`${this.url}/summary`);
  }

  searchByCountry(country: string) {
    return this.http.get(`${this.url}/total/country/${country}`);
  }

}
