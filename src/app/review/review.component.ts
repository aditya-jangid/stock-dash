import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  retrievedReviews;
  constructor(
    private AppComponent: AppComponent
  ) {}

  ngOnInit() {
    this.AppComponent.getReviews().subscribe(data => {
			this.retrievedReviews = data;
			// console.log(this.retrievedReviews);
		});
  }

}
