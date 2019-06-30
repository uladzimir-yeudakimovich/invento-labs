import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalSettingsService } from './services/language.servise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isEnglish: boolean = true;

  constructor(
    private translate: TranslateService,
    public localLanguage: LocalSettingsService
  ) {
    const lang = localLanguage.getLanguage() ? localLanguage.getLanguage() : 'en';
    translate.setDefaultLang(lang);
  }

  ngOnInit() { }

  switchLanguage(language: string) {
    this.isEnglish = !this.isEnglish;
    this.translate.use(language);
    this.localLanguage.setLanguage(language);
  }

}
