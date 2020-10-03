import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iReview, iStock } from './stock';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	url = 'https://stock-dash-backend.herokuapp.com/api';
	reviewsurl = 'https://stock-dash-backend.herokuapp.com/api/reviews/'; //add forward slash

	constructor(
		private http: HttpClient
	) { }
	
	getData(): Observable<iStock[]> {
		return this.http.get<iStock[]>(this.url);
	}
	getReviews(): Observable<iReview[]> {
		return this.http.get<iReview[]>(this.reviewsurl);
	}
	createReview(reviewData: Object) {
		return this.http.post(this.reviewsurl, reviewData);
	}
	deleteReview(id) {
		return this.http.delete(this.reviewsurl + id);
	}
	updateTimedata(timeData: Object) {
		return this.http.put(this.url, timeData);
	}
}
