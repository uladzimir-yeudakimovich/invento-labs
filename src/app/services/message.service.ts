import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessageService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // const userName = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).name : '?';

    if (req.url.includes('assets/message.json')) {
      const paramReq = req.clone({
        params: req.params.set(
          'userName',
          "123" // userName
        )
      });
      return next.handle(paramReq);
    } else {
      return next.handle(req);
    }

  }

  // TODO: 4000 port where node server is running
  private uri: string = 'http://localhost:4000';

  private url: string = 'assets/message.json';
  userName: string = "";
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
        this.userName = messages.name;
        const userInfo = JSON.stringify({
          name: messages.name,
          email: messages.email
        });
        localStorage.setItem('userInfo', userInfo);
      }
      this.messagesFromLocalStorage.push(messages.message);
    }

    const body = JSON.stringify(this.messagesFromLocalStorage);
    localStorage.setItem('messages', body);
  }

}
