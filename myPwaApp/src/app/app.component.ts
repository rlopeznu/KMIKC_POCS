import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private swUpdate: SwUpdate) {
  }

  ngOnInit() {

       if (this.swUpdate.isEnabled) {

           this.swUpdate.available.subscribe(() => {

               if(confirm("Nueva version disponible. Desea cargar nueva version?")) {

                   window.location.reload();
               }
           });
       }
   }

   submit() {
     console.log("submit");
   }
}
