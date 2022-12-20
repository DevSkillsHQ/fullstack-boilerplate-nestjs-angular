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
  getTransactionsWithdraw() {
    this.transactions = this.tService.getTransactionsWithdraw();
    return this.transactions;
  }
  getTransactions() {
    this.transactions = this.tService.getTransactions();
    return this.transactions;
  }
  ngOnInit(): void {}
}
