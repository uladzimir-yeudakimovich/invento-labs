import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: Array<object> = [];
  // messages = [
  //   {
  //       email: "anna@gmail.com",
  //       message: "Software Engineer with experience of creation single page application using frameworks such as Angular, Angular Material, Bootstrap and various libraries, support application written using AngularJS.",
  //       name: "Anna"
  //   },
  //   {
  //       email: "aleksandr@gmail.com",
  //       message: "Responsible and highly trustworthy with analytical, problem solving and troubleshooting capability. Results oriented and customer focused, with excellent relationship management skills.",
  //       name: "Alexander"
  //   },
  //   {
  //       email: "alina@gmail.com",
  //       message: "Self-motivated and able to work to own initiative, persistent to work under pressure, flexible with the ability to juggle priorities effectively, ambitious to drive the career forward and willing to learn.",
  //       name: "Alina"
  //   }
  // ];

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
