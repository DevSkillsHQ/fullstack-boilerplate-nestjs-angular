import { Component } from '@angular/core';
import { TransactionsService } from '../transactions.service';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent {
  transactions: Array<object> | undefined;
  tService: TransactionsService;
  constructor(tService: TransactionsService) {
    this.tService = tService;
  }
  getTransactionsWithdraw() {}
  getTransactions() {}
  ngOnInit(): void {}
}
