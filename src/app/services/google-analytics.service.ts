import { Injectable } from '@angular/core';

declare let ga:Function;

@Injectable({
    providedIn: 'root',
})
export class GoogleAnalyticsService {

    constructor() { }

    public eventEmitter(
        eventCategory: string,
        eventAction: string,
        eventLabel: string,
        eventValue: any
        ) {
        ga('send', 'event', {
            eventCategory: eventCategory,
            eventLabel: eventLabel,
            eventAction: eventAction,
            eventValue: eventValue
        });
    }
}