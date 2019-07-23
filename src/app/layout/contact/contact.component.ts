import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'

export interface SendEmailResponse {
  status: boolean,
  message: Object
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [
    './contact.component.scss',
    '../../app.component.scss'
  ]
})
export class ContactComponent implements OnInit, OnDestroy {

  public contactForm: FormGroup
  private subs: Subject<Subscription> = new Subject()
  public submitted: boolean = false

  constructor(
    private http: HttpClient) {

    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.next()
    this.subs.complete()
  }

  public sendMessage(): void {

    this.submitted = true
    const name = this.contactForm.value.name
    const email = this.contactForm.value.email
    const message = this.contactForm.value.message

    console.log('name', name)
    console.log('email', email)
    console.log('message', message)

    if (name.length && email.length && message.length) {
      this.http.post('http://localhost:3000/api/send', {
        name,
        email,
        message
      })
        .pipe(takeUntil(this.subs))
        .subscribe((res: SendEmailResponse) => {
          if (res.status) {
            this.contactForm.reset()
          } else {

          }
          console.log(res)
          this.submitted = false
        })
    }
  }

}
