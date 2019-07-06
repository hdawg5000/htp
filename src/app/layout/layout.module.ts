import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './layout-routes';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class LayoutModule { }