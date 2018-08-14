import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Report } from '../models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private url = 'https://kmikc-nodejs-poc.herokuapp.com/report';

  constructor(private http: Http) { }
  
  getReport(){
    return this.http.get(this.url);
  }

  insertProduct(report: Report){
    console.log(JSON.stringify(report));
    this.http.post(this.url,JSON.stringify(report))
      .subscribe(response =>{
        console.log(response);
      });
  }
}
