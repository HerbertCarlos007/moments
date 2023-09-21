import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  faTimes = faTimes
  
  constructor(public messagesService: MessageService) {}
}
