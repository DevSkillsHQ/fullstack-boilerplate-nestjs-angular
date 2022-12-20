import { Component, Input } from '@angular/core';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() transactions: any;
  tService: TransactionsService;

  constructor(tService: TransactionsService) {
    this.tService = tService;
  }
  ngOnInit(): void {}
}
