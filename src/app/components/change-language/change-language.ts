import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { LanguageService } from '../../services/language.servise';

@Component({
  selector: 'change-language',
  templateUrl: './change-language.html',
  styleUrls: ['./change-language.scss']
})
export class ChangeLanguageComponent implements OnInit {
  public isEnglish: boolean;

  constructor(private translate: TranslateService, public languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.currentLang.subscribe(lang => {
      this.translate.setDefaultLang(lang);
      this.isEnglish = lang === 'en';
    });
  }

  switchLanguage(language: string): void {
    this.languageService.setLanguage(language);

    (<any>window).dataLayer.push({
      eventCategory: "changeLanguage",
      eventLabel: "click",
      eventAction: "userLanguage",
      eventValue: language
    });
  }
}
