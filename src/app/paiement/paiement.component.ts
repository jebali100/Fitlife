import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
  paymentDetails = {
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert(`Payment successful for card number ${this.paymentDetails.cardNumber}`);
  }
}
