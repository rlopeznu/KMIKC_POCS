import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  reports: any[];

  constructor(private reportService: ReportService,private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
   }

   onSubmit(productForm: NgForm){
     this.reportService.insertProduct(productForm.value);
   }

  ngOnInit() {
    this.reportService.getReport()
      .subscribe(response=>{
        this.reports = response.json();
      })
  }

}
