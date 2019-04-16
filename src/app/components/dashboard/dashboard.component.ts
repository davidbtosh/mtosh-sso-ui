import { Component, OnInit } from '@angular/core';
import { ValuesService } from 'src/app/services/values.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  values: string[];

  constructor(private valuesService: ValuesService) { }

  ngOnInit() {
  }

  getValues() {
    //alert('test');
    this.valuesService.getValues().subscribe(
      resp => {               
          if(resp) {
            this.values = resp;
          }
      },
      error => {        
        this.values = [];
        console.log(error);
      }
    );
  }

}
