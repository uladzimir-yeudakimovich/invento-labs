import { Component, Input } from '@angular/core';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

	@Input() showMessage: object;

  constructor(
	public messageService: MessageService
  ) { }

  updateMessage() {
		this.messageService.updateMessage(this.showMessage);
		this.showMessage = undefined;
  }

  closeMessage() {
		this.messageService.getLocalMessages();
    this.showMessage['message'] = this.messageService.messagesFromLocalStorage[this.showMessage['index']]['message'];
		this.showMessage = undefined;
  }

}
