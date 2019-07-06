import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { routes } from './layout-routes';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AboutComponent } from './about/about.component';

@NgModule({
    declarations: [
        LayoutComponent,
        AboutComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class LayoutModule { }