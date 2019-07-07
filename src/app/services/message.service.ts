import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  // TODO: 4000 port where node server is running
  private uri: string = 'http://localhost:4000';

  private url: string = 'assets/message.json';
  messagesFromLocalStorage: Array<object> = [];
  userName: string;

  constructor(private http: HttpClient) { }

  getMessagesFromServer() {
    return this.http.get(this.uri);
  }

  saveMessagesToServer(data) {
    return this.http.post(this.uri, data);
  }

  getMessages() {
    return this.http.get(this.url);
  }

  getLocalMessages() {
    if (localStorage.getItem('messages')) {
      this.messagesFromLocalStorage = JSON.parse(localStorage.getItem('messages'));
    }
  }

  getUserName() {
    if (localStorage.getItem('userInfo')) {
      this.userName = JSON.parse(localStorage.getItem('userInfo')).name;
    } else {
      this.messagesFromLocalStorage.length = 0;
      localStorage.setItem('messages', JSON.stringify(this.messagesFromLocalStorage));
    }
  }

  updateMessage(messages) {
    if (Number.isInteger(messages)) {
      this.messagesFromLocalStorage.splice(messages, 1);
    } else {
      if (messages.name) {
        const userInfo = JSON.stringify({
          name: messages.name,
          email: messages.email
        });
        this.userName = messages.name;
        localStorage.setItem('userInfo', userInfo);
      }
      this.messagesFromLocalStorage.push(messages.message);
    }

    const body = JSON.stringify(this.messagesFromLocalStorage);
    return localStorage.setItem('messages', body);
  }

}
