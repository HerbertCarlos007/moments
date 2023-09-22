import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MomentService } from 'src/app/services/moment/moment.service';
import { Moment } from 'src/app/interfaces/Moment';
import { environment } from 'src/environments/environments';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons'
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent {
  moment?: Moment
  baseApiUrl = environment.baseApiUrl
  faTimes = faTimes
  faEdit = faEdit

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.momentService.getMoment(id).subscribe(item => this.moment = item.data)
  }
  
  async removeHandler(id: number) {
    await this.momentService.removeMoment(id).subscribe()
    
    this.messageService.add('Momento excluido com sucesso!')
    this.router.navigate(['/'])
  }

}
