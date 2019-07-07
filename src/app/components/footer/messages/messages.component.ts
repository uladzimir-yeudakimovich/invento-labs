import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messagesFromServer: Array<object>;
  messagesFromLocalStorage: Array<object>;
  userName: string;

  constructor(
    public messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getMessages();
    this.getUserName();
    this.getLocalMessages();
  }

  getMessages() {
    return this.messageService.getMessages().subscribe(dataFromServer => {
      this.messagesFromServer = dataFromServer['mess'];
    });

    // TODO: where node server is running

    // return this.messageService.getMessagesFromServer().subscribe(dataFromServer => {
    //   this.messagesFromServer = dataFromServer['mess'];
    // });
  }

  getUserName() {
    this.messageService.getUserName();
    this.userName = this.messageService.userName;
  }

  getLocalMessages() {
    this.messageService.getLocalMessages();
    this.messagesFromLocalStorage = this.messageService.messagesFromLocalStorage;
  }

  delete(index) {
    this.messageService.updateMessage(index);
  }
}