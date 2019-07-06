import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

export const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', loadChildren: './home/home.module#HomeModule' },
            { path: '/contact', loadChildren: './contact/contact.module#ContactModule' },
            { path: '/about', loadChildren: './about/about.module#AboutModule' }
        ]
    }
];