import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css'],
})
export class CreateTransactionComponent {
  tService: TransactionsService;

  constructor(tService: TransactionsService) {
    this.tService = tService;
  }

  allowOnlyNumbersAndMinus(event: KeyboardEvent): boolean {
    console.log(event);

    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 45) {
      return false;
    }
    return true;
  }
  onSubmit(form: NgForm) {
    form.reset();
  }
}
