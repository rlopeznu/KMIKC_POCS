import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestMethod, Headers } from '@angular/http';
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
    this.http.post(this.url, JSON.stringify(report),new RequestOptions({method: RequestMethod.Post ,headers: new Headers({'Content-Type': 'application/json'})}))
      .subscribe(response =>{
        console.log(response);
      });
  }
}
