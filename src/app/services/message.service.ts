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
      this.messagesFromLocalStorage = JSON.parse(localStorage.getItem('messages'))['mess'];
    }
  }

  updateMessage(messages) {
    if (Number.isInteger(messages)) {
      this.messagesFromLocalStorage.splice(messages, 1);
    } else if (messages.index + 1) {
      this.messagesFromLocalStorage[messages.index]['message'] = messages['message'];
    } else {
      this.messagesFromLocalStorage.push(messages);
    }

    const body = JSON.stringify({ mess: this.messagesFromLocalStorage });
    return localStorage.setItem('messages', body);
  }

}
