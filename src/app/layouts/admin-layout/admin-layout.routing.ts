import { Routes } from '@angular/router';

import { mastercardComponent } from '../../mastercard/mastercard.component';
import { UpdateComponent } from '../../update/update.component';
import { ReviewComponent } from '../../review/review.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'MA',      component: mastercardComponent },
    { path: 'ADBE',      component: mastercardComponent },
    { path: 'USDJPY',      component: mastercardComponent },
    { path: 'VIX',      component: mastercardComponent },
    { path: 'Update',      component: UpdateComponent },
    { path: 'Review',      component: ReviewComponent },
];
