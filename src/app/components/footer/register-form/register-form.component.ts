import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  createMessageForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    public messageService: MessageService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.createMessageForm = this.formBuilder.group({
      name: [ '', Validators.required ],
      email: [ '', [ Validators.required, Validators.email ] ],
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
    this.createForm();
  }

}
