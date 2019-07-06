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
      this.userName =  JSON.parse(localStorage.getItem('userInfo')).name;
    } else {
      this.messagesFromLocalStorage = [];
      localStorage.setItem('messages', JSON.stringify([]));
    }
  }

  updateMessage(messages) {
    if (Number.isInteger(messages)) {
      this.messagesFromLocalStorage.splice(messages, 1);
    } else {
      if (messages.name !== '') {
        localStorage.setItem('userInfo', JSON.stringify({
          name: messages.name,
          email: messages.email
        }));
      } else {
        messages.name = JSON.parse(localStorage.getItem('userInfo')).name;
        messages.email = JSON.parse(localStorage.getItem('userInfo')).email;
      }
      this.messagesFromLocalStorage.push(messages.message);
    }

    const body = JSON.stringify(this.messagesFromLocalStorage);
    return localStorage.setItem('messages', body);
  }

}
