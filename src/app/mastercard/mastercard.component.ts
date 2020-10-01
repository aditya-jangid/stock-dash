import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppComponent } from '../app.component';
import { data } from 'jquery';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-mastercard',
  templateUrl: './mastercard.component.html',
  styleUrls: ['./mastercard.component.css']
})
export class mastercardComponent implements OnInit {
  retrievedData;
  currPath;

  // arrADBE: any[];
  // arrMA: any[];
  view: any[] = [700, 400];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  yAxisLabel: string = 'Price';
  timeline: boolean = true;
  autoScale: boolean = true;


  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(
    private route: ActivatedRoute,
    private AppComponent: AppComponent,
    private router: Router,
    public datepipe: DatePipe
  ) {

  }

  ngOnInit() {

    //get active route
    this.currPath = this.router.url.slice(1);
    console.log(this.currPath);

    fetch(`https://stock-dash-backend.herokuapp.com/api/chartDataby/${this.currPath}`)
      .then(res => res.json())
      .then((arrCHART) => {
        // console.log('Output: ', out);
        Object.assign(this, { arrCHART });
      }).catch(err => console.error(err));

    //subscribe into retrievedData
    this.AppComponent.getData().subscribe(data => this.retrievedData = data);
  }
}
