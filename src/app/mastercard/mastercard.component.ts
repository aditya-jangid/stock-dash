import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppComponent } from '../app.component';
import { data } from 'jquery';
import { DatePipe } from '@angular/common';
import { arrADBE , arrMA} from '../stock';

@Component({
  selector: 'app-mastercard',
  templateUrl: './mastercard.component.html',
  styleUrls: ['./mastercard.component.css']
})
export class mastercardComponent implements OnInit {
  retrievedData;
  currPath;

  arrADBE: any[];
  arrMA: any[];
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
    Object.assign(this, { arrADBE , arrMA });
  }

  ngOnInit() {
    //subscribe into retrievedData
    this.AppComponent.getData().subscribe(data => this.retrievedData = data);

    //get active route
    this.currPath = this.router.url.slice(1);
    console.log(this.currPath);

  }
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
