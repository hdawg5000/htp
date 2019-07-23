import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { routes } from './contact-routes';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
    ]
})
export class ContactModule { }