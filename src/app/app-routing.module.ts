import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ContactsComponent } from './components/footer/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: 'projects', component: MainComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'feedback', component: FooterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }