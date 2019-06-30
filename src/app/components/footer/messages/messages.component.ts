import { Component, OnInit, Output } from '@angular/core';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messagesFromServer: Array<object>;
  messagesFromLocalStorage: Array<object>;
  messageToModal: object;
  @Output() clickChange;

  constructor(
    public messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getMessages();
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

  getLocalMessages() {
    this.messageService.getLocalMessages();
    this.messagesFromLocalStorage = this.messageService.messagesFromLocalStorage;
  }

  delete(index) {
    this.messageService.updateMessage(index);
  }

  showDetails(index) {
    this.messageToModal = this.messagesFromLocalStorage[index];
    this.messageToModal['index'] = index;
  }
}