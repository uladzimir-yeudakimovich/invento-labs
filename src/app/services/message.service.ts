import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: Array<object> = [];

  constructor(private http: HttpClient) { }

  getMessages() {
    return this.http.get('https://portfolio-57f5d.firebaseio.com/messages.json');
  }

  updateMessage(message: object) {
    this.messages.push(message);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put('https://portfolio-57f5d.firebaseio.com/messages.json', this.messages, {headers: headers});
  }
}
