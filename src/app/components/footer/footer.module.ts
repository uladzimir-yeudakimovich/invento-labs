import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RemoveSpaces } from '../../pipes/remove-spaces';

import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer.component';
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
		FooterComponent
	],
  declarations: [
    ContactsComponent,
    FooterComponent,
    MessagesComponent,
		RegisterFormComponent,

		RemoveSpaces,
  ]
})
export class FooterModule { }
