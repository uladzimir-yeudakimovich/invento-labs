import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../../services/message.service';
import { Feedback } from '../../../models/models';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  feedbacks: Feedback[];

  constructor(public messageService: MessageService) { }

  ngOnInit() {
    this.messageService.getMessages().subscribe((messages: Feedback[]) => {
      this.feedbacks = messages;
      this.messageService.messages = messages;
    });
  }
}