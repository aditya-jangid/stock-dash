import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
	selector: 'app-review',
	templateUrl: './review.component.html',
	styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
	retrievedReviews;
	reviewForm: FormGroup;
	constructor(
		private AppComponent: AppComponent
	) { }

	ngOnInit() {
		this.AppComponent.getReviews().subscribe(data => {
			this.retrievedReviews = data;
			// console.log(this.retrievedReviews);
		});
		this.initForm();
	}

	private initForm() {
		this.reviewForm = new FormGroup({
			'review': new FormControl('', Validators.required),
			'title' : new FormControl('', Validators.required),
		});
	}

	onSubmit() {
		if (this.reviewForm.value.review) {
			// console.log(this.reviewForm.value);
			this.AppComponent.createReview(this.reviewForm.value).subscribe(data => {
				// console.log(data);
				this.retrievedReviews.push(data);
			});;
			this.reviewForm.reset(this.reviewForm.value); 
		}
	}

	deleteReview(id) {
		var reviews = this.retrievedReviews;

		this.AppComponent.deleteReview(id).subscribe(data => {
			for (var i = 0; i < reviews.length; i++) {
				if (reviews[i]._id == id) {
					reviews.splice(i, 1);
				}
			}
		})
	}

}
