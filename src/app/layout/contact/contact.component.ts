import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private http: HttpClient,
    private snackBar: MatSnackBar) {

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

    if (name.length && email.length && message.length) {
      this.http.post('https://api.hammadtakespics.com/send', {
        name,
        email,
        message
      })
        .pipe(takeUntil(this.subs))
        .subscribe((res: SendEmailResponse) => {
          if (res.status) {
            this.contactForm.reset()
            this.snackBar.open('Message sent', 'Close', { duration: 3000 })
          } else
            this.snackBar.open('Something went wrong. Please try again later', 'Close', { duration: 3000 })
          this.submitted = false
        },
          (err) => this.snackBar.open('Something went wrong. Please try again later', 'Close', { duration: 3000 }))
    }
  }

}
