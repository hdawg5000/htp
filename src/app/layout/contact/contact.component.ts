import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [
    './contact.component.scss',
    '../../app.component.scss'
  ]
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
  }

  public sendMessage(): void {
    const name = this.contactForm.value.name
    const email = this.contactForm.value.email
    const message = this.contactForm.value.message

    console.log('name', name)
    console.log('email', email)
    console.log('message', message)
  }

}
