import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as firebase from 'firebase';

import { LocalSettingsService } from './services/language.servise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isEnglish: boolean = true;

  constructor(private translate: TranslateService,
              public localLanguage: LocalSettingsService) {
    const lang = localLanguage.getLanguage() ? localLanguage.getLanguage() : 'en';
    translate.setDefaultLang(lang);
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyChRbKLN0Tvh1DttoBL01amEGgm21eS2xw",
      authDomain: "portfolio-57f5d.firebaseapp.com"
    });
  }

  switchLanguage(language: string) {
    this.isEnglish = !this.isEnglish;
    this.translate.use(language);
    this.localLanguage.setLanguage(language);
    (<any>window).dataLayer.push({
      eventCategory: "changeLanguage",
      eventLabel: "click",
      eventAction: "userLanguage",
      eventValue: language
    });
  }
}
