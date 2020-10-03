import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';

import { MatDatepickerModule } from '@angular/material/datepicker';

// ngx charts
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { mastercardComponent } from '../../mastercard/mastercard.component';
import { UpdateComponent } from '../../update/update.component';
import { ReviewComponent } from '../../review/review.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgxChartsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [
    mastercardComponent,
    UpdateComponent,
    ReviewComponent,
  ]
})

export class AdminLayoutModule { }
