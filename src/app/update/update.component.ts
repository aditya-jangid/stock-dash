import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  retrievedData;
  updateForm: FormGroup;

  constructor(
    private AppComponent: AppComponent
  ) { }

  ngOnInit() {
    this.AppComponent.getData().subscribe(data => {
      this.retrievedData = data;
      console.log(this.retrievedData);
    });
    this.initForm();
  }

  private initForm() {
    this.updateForm = new FormGroup({
      'date': new FormControl('', Validators.required),
      'symbol': new FormControl('', Validators.required),
      'open': new FormControl('', Validators.required),
      'close': new FormControl('', Validators.required),
      'predicted': new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.updateForm.value.symbol) {
      console.log(this.updateForm.value);
      this.AppComponent.updateTimedata(this.updateForm.value).subscribe(data => {
        console.log(data);
        this.retrievedData = data;
      });
      // this.updateForm.reset(this.updateForm.value);
    }
  }

}
