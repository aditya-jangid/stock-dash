import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iReview, iStock } from './stock';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  url = 'https://stock-dash-backend.herokuapp.com/api';
  reviewsurl = 'http://localhost:8000/api/reviews';
  // items = [];
  constructor(
    private http: HttpClient
    ) {
    // this.http.get(this.url).toPromise().then(data => {
    //   console.log(data);
    // });
  }
  getData(): Observable<iStock[]> {
    return this.http.get<iStock[]>(this.url);
  }
  getReviews(): Observable<iReview[]> {
    return this.http.get<iReview[]>(this.reviewsurl);
  }
}
