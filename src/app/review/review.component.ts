import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import {trigger, style, animate, transition} from '@angular/animations';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 

@Component({
	selector: 'app-review',
	templateUrl: './review.component.html',
	styleUrls: ['./review.component.css'],
	animations: [
		trigger('fade', [ 
		  transition('void => *', [
			style({ opacity: 0 }), 
			animate(500, style({opacity: 1}))
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
export class ReviewComponent implements OnInit {
	retrievedReviews;
	reviewForm: FormGroup;
	loading = true;

	constructor(
		private AppComponent: AppComponent
	) { }

	ngOnInit() {
		this.AppComponent.getReviews().subscribe(data => {
			this.retrievedReviews = data;
			// console.log(this.retrievedReviews);
			this.loading = false;
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
			this.reviewForm.reset(); 
		}
	}

	deleteReview(id) {
		var reviews = this.retrievedReviews;
		Swal.fire({  
			title: 'Are you sure want to remove review?',  
			icon: 'warning',  
			showCancelButton: true,  
			confirmButtonText: 'Yes, delete it!',  
			cancelButtonText: 'No, keep it'  
		  }).then((result) => {  
			if (result.value) {  
			  Swal.fire(  
				'Deleted!',  
				'Your review has been deleted.',  
				'success'  
			  );
			  this.AppComponent.deleteReview(id).subscribe(data => {
				for (var i = 0; i < reviews.length; i++) {
					if (reviews[i]._id == id) {
						reviews.splice(i, 1);
					}
				}
			});  
			} else if (result.dismiss === Swal.DismissReason.cancel) {  
			  Swal.fire(  
				'Cancelled',  
				'Your review is safe :)',  
				'error'  
			  )  
			}  
		  })  
	}

}
