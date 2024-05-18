import { Component, OnInit } from '@angular/core';
import { Offer } from '../models/offer.model'; // Importer l'interface Offer

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  offers: Offer[] = [
    {
      name: 'Basic Plan',
      price: 19.99,
      description: 'Access to all basic equipment and facilities.'
    },
    {
      name: 'Premium Plan',
      price: 39.99,
      description: 'Includes all basic plan features plus group classes and personal training sessions.'
    },
    {
      name: 'VIP Plan',
      price: 59.99,
      description: 'All premium plan features plus VIP lounge access and exclusive events.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  subscribe(offer: Offer): void { // Utiliser Offer pour typer le paramètre offer
    alert(`You have subscribed to the ${offer.name}!`);
  }
}
