import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { routes } from './home-routes';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgbCarouselModule
    ]
})
export class HomeModule { }