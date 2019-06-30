import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalSettingsService{
    getLanguage() {
        return localStorage['language'];
    }

    setLanguage(language: string) {
        localStorage['language'] = language;
    }
}