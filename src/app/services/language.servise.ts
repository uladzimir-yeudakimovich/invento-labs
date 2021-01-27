import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
    providedIn: 'root',
})
export class LanguageService {
  public lang = new BehaviorSubject<string>(
    localStorage['language'] ? localStorage['language'] : window.navigator.language
  );
  currentLang = this.lang.asObservable();

  setLanguage(language: string) {
    localStorage['language'] = language;
    this.lang.next(language);
  }
}