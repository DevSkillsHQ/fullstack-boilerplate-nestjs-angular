import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TransactionsService {
  transactions = [
    { account_id: 1232143123, amount: -500, balance: 12000 },
    { account_id: 1232342123, amount: 130, balance: 30400 },
    { account_id: 121236123, amount: -7345, balance: 23100 },
  ];
  allTransactions = [];
  httpClient: HttpClient;
  myData = {
    account_id: '0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2',
    amount: 7,
  };

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getAllTransactions() {}

  // Posting new transaction
  postTransaction(account_id: number, amount: number) {
    this.httpClient
      .post(environment.TRANSACTION_API, { account_id, amount })
      .subscribe((data) => {
        console.log(data);
      });
  }

  // Fetching the balance
  async fetchBalance(account_id: string): Promise<number | undefined> {
    try {
      const response = await this.httpClient
        .get<object>(`${environment.GET_BALANCE_API}${account_id}`)
        .toPromise();
      const balance = this.getValue({ ...response })('balance');
      return balance;
    } catch (error) {
      // handle error
      return 0;
    }
  }
  getValue(obj: { [key: string]: number }) {
    return (key: string): number => obj[key];
  }
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

  // Adding the new transaction on the top of the list
  addTransaction(account_id: number, amount: number, balance: number) {
    const newTrans = {
      account_id: account_id,
      amount: amount,
      balance: balance,
    };
    this.transactions.splice(0, 0, newTrans);
  }
}
