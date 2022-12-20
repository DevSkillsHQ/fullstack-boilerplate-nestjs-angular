import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable()
export class TransactionsService {
  transactions = [
    { account_id: 1232143123, amount: -500, balance: 12000 },
    { account_id: 1232342123, amount: 130, balance: 30400 },
    { account_id: 121236123, amount: -7345, balance: 23100 },
  ];
  allTransactions = [];
  myData = {
    account_id: '0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2',
    amount: 7,
  };
  getAllTransactions() {}
  postTransaction(account_id: number, amount: number) {}
  fetchBalance(account_id: string) {}
  getValue() {}
  // Filtering the type of the transaction
  getTransactions() {
    return this.transactions.filter((trans) => {
      return trans['amount'] > 0;
    });
  }
  getTransactionsWithdraw() {
    return this.transactions.filter((trans) => {
      return trans['amount'] < 0;
    });
  }
  addTransaction(account_id: number, amount: number, balance: number) {}

  constructor() {}
}
