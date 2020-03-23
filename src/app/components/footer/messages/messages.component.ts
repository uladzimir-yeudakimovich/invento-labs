import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: Array<object>;

  constructor(public messageService: MessageService) { }

  ngOnInit() {
    this.messageService.getMessages()
      .subscribe(
        (messages: Array<object>) => {
          this.messages = messages;
          this.messageService.messages = messages;
        },
        (error) => console.log(error)
      );
  }

  delete(index) {
    this.messageService.updateMessage(index);
  }
}