import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../../services/message.service';
import { GoogleAnalyticsService } from "../../../services/google-analytics.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  createMessageForm: FormGroup;
  submitted = false;
  fieldVisible: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    public messageService: MessageService,
    public googleAnalyticsService: GoogleAnalyticsService
  ) { }

  ngOnInit() {
    this.messageService.userName ? this.newMessageForm() : this.createRegisterForm();
  }

  createRegisterForm() {
    this.createMessageForm = this.formBuilder.group({
      name: [ '', Validators.required ],
      email: [ '', [ Validators.required, Validators.email ] ],
      message: [ '', [ Validators.required, Validators.minLength(2) ] ]
    });
  }

  newMessageForm() {
    this.fieldVisible = false;
    this.createMessageForm = this.formBuilder.group({
      name: [ '' ],
      email: [ '' ],
      message: [ '', [ Validators.required, Validators.minLength(2) ] ]
    });
  }

  get isRequired() { return this.createMessageForm.controls; }

  onSubmit() {
    if (this.createMessageForm.invalid) {
      this.submitted = true;
      return;
    }
    this.messageService.updateMessage(this.createMessageForm.value);
    this.submitted = false;
    if (!this.createMessageForm.value.name) {
      this.createMessageForm.value.name = JSON.parse(localStorage.getItem('userInfo')).name;
      this.createMessageForm.value.email = JSON.parse(localStorage.getItem('userInfo')).email;
    }
    this.googleAnalyticsService.eventEmitter("submit", "click", "userMessage", this.createMessageForm.value);
    this.newMessageForm();
  }

}
