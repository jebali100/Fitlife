import { Component } from '@angular/core';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent {
  orders = [
    { 
      date: new Date(), 
      productName: 'Product 1', 
      quantity: 2, 
      totalPrice: 200, 
      memberFirstName: 'John', 
      memberLastName: 'Doe', 
      status: 'Pending' 
    },
    { 
      date: new Date(), 
      productName: 'Product 2', 
      quantity: 1, 
      totalPrice: 100, 
      memberFirstName: 'Jane', 
      memberLastName: 'Doe', 
      status: 'Pending' 
    }
  ];

  validateOrder(order: any) {
    order.status = 'Validated';
    // Logique supplémentaire pour valider la commande
  }

  refuseOrder(order: any) {
    order.status = 'Refused';
    // Logique supplémentaire pour refuser la commande
  }
}
