import { Component, Input } from '@angular/core';
import { CommunionimgModalService } from './communionimg.service';

@Component({
  selector: 'app-communionimg-modal',
  templateUrl: './communionimg-modal.component.html',
  styleUrls: ['./communionimg-modal.component.css']
})
export class CommunionimgModalComponent {
  @Input() imageSrc: string = '';

  constructor(private communionimgModalService: CommunionimgModalService) { }

  ngOnInit(): void { }

  close(): void {
    this.communionimgModalService.close();
  }
}
