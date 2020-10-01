import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Router } from '@angular/router';
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
	arrCHART: any[];
	view: any[];

	// options
	legend: boolean = true;
	showLabels: boolean = true;
	animations: boolean = true;
	xAxis: boolean = true;
	yAxis: boolean = true;
	showYAxisLabel: boolean = true;
	showXAxisLabel: boolean = true;
	xAxisLabel: string = 'Date';
	yAxisLabel: string = 'Price($)';
	timeline: boolean = true;
	autoScale: boolean = true;


	colorScheme = {
		domain: ['#d81b60', '#43a047']
	};

	constructor(
		private AppComponent: AppComponent,
		private router: Router,
		public datepipe: DatePipe
	) {

	}

	ngOnInit() {

		//get active route
		this.currPath = this.router.url.slice(1);
		console.log(this.currPath);

		if ($(window).width() > 991) {
			this.view = [700, 400];
		}

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
