import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  createMessageForm: FormGroup;

  constructor(public messageService: MessageService) { }

  ngOnInit() {
    this.createMessageForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'message': new FormControl(null, [Validators.required, Validators.minLength(2)])
    });
  }

  get isRequired() { return this.createMessageForm.controls; }

  onSubmit() {
    this.messageService.updateMessage(this.createMessageForm.value);
    // this.messageService.saveMessagesToServer(this.createMessageForm.value);
    this.createMessageForm.reset();

    (<any>window).dataLayer.push({
      eventCategory: "submit",
      eventLabel: "click",
      eventAction: "userMessage",
      eventValue: this.createMessageForm.value
    });
  }

}
