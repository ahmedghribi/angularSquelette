import { AuthGuard } from './../guards/auth.guard';
import { Routes } from '@angular/router';

export const CommonLayout_ROUTES: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard],

    }
];
