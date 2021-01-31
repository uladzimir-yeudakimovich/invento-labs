import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { FeedbackComponent } from './feedback.component';
import { MessagesComponent } from './messages/messages.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
	],
	exports: [
		FeedbackComponent
	],
  declarations: [
    FeedbackComponent,
    MessagesComponent,
		RegisterFormComponent,
  ]
})
export class FeedbackModule { }
