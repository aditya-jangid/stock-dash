import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { data } from 'jquery';
import { DatePipe } from '@angular/common';
import {trigger, style, animate, transition} from '@angular/animations';

@Component({
	selector: 'app-mastercard',
	templateUrl: './mastercard.component.html',
	styleUrls: ['./mastercard.component.css'],
	animations: [
		trigger('fade', [ 
		  transition('void => *', [
			style({ opacity: 0 }), 
			animate(1000, style({opacity: 1}))
		  ]) 
		]),
		trigger('itemAnim', [
			// ENTRY ANIMATION
			transition('void => *', [
			  // Initial state
			  style({
				height: 0,
				opacity: 0,
				transform: 'scale(0.85)',
				'margin-bottom': 0,
	  
				// we have to 'expand' out the padding properties
				paddingTop: 0,
				paddingBottom: 0,
				paddingLeft: 0,
				paddingRight: 0,
			  }),
			  // we first want to animate the spacing (which includes height and margin)
			  animate('50ms', style({
				height: '*',
				'margin-bottom': '*',
				paddingTop: '*',
				paddingBottom: '*',
				paddingLeft: '*',
				paddingRight: '*',
			  })),
			  animate(200)
			]),
	  
			transition('* => void', [
			  // first scale up
			  animate(50, style({
				transform: 'scale(1.05)'
			  })),
			  // then scale down back to normal size while beginning to fade out
			  animate(50, style({
				transform: 'scale(1)',
				opacity: 0.75
			  })),
			  // scale down and fade out completely
			  animate('120ms ease-out', style({
				transform: 'scale(0.68)',
				opacity: 0,
			  })),
			  // then animate the spacing (which includes height, margin and padding)
			  animate('150ms ease-out', style({
				height: 0,
				paddingTop: 0,
				paddingBottom: 0,
				paddingRight: 0,
				paddingLeft: 0,
				'margin-bottom': '0',
			  }))
			])
		  ])
	  ]
})
export class mastercardComponent implements OnInit {
	retrievedData;
	currPath;
	loading = true;

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
	xAxisLabel: string = 'Dates';
	yAxisLabel: string = 'Price($)';
	timeline: boolean = false;
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

		if ($(window).width() > 1091) {
			this.view = [900, 500];
		}

		fetch(`https://stock-dash-backend.herokuapp.com/api/chartDataby/${this.currPath}`)
			.then(res => res.json())
			.then((arrCHART) => {
				//console.log('Output: ', arrCHART);
				arrCHART.forEach((item) => {
					item.series.sort((a, b) => new Date(a.name).getTime() - new Date(b.name).getTime())
				});
				Object.assign(this, { arrCHART });
			}).catch(err => console.error(err));

		//subscribe into retrievedData
		this.AppComponent.getData().subscribe(data => {
			this.retrievedData = data;
			this.retrievedData.forEach((item) => {
				item.timeseries.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
			});
			//console.log(this.retrievedData);
			this.loading = false;
		});

	}
}
