import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalSettingsService } from './services/language.servise';
import { GoogleAnalyticsService } from "./services/google-analytics.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isEnglish: boolean = true;

  constructor(
    private translate: TranslateService,
    public localLanguage: LocalSettingsService,
    public googleAnalyticsService: GoogleAnalyticsService
  ) {
    const lang = localLanguage.getLanguage() ? localLanguage.getLanguage() : 'en';
    translate.setDefaultLang(lang);
  }

  ngOnInit() { }

  switchLanguage(language: string) {
    this.isEnglish = !this.isEnglish;
    this.translate.use(language);
    this.localLanguage.setLanguage(language);
    this.googleAnalyticsService.eventEmitter("changeLanguage", "click", "userLanguage", language);
  }

}
