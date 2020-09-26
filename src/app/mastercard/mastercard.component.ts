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
  constructor(
    private route: ActivatedRoute,
    private AppComponent: AppComponent,
    private router: Router,
    public datepipe: DatePipe
  ) { }

  ngOnInit() {
    //subscribe into retrievedData
    this.AppComponent.getData().subscribe(data => this.retrievedData = data);

    //get active route
    this.currPath = this.router.url.slice(1);
    console.log(this.currPath);
  }

}
