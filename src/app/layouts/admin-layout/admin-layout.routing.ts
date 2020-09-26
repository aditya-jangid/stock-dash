import { Routes } from '@angular/router';

import { mastercardComponent } from '../../mastercard/mastercard.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'MA',      component: mastercardComponent },
    { path: 'ADBE',      component: mastercardComponent },
    { path: 'USDJPY',      component: mastercardComponent },
    { path: 'VIX',      component: mastercardComponent },
];
