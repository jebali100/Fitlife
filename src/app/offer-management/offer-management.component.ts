import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-offer-management',
  templateUrl: './offer-management.component.html',
  styleUrls: ['./offer-management.component.css']
})
export class OfferManagementComponent {
  offers = [
    { title: 'Black Friday Sale', description: '50% off on all memberships' },
    { title: 'New Year Offer', description: 'Get 2 months free with an annual membership' }
  ];
  offerTitle: string = '';
  offerDescription: string = '';
  editingOffer: boolean = false;
  selectedOffer: any;

  openAddOfferModal() {
    this.editingOffer = false;
    this.offerTitle = '';
    this.offerDescription = '';
    const modalElement = document.getElementById('offerModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  openEditOfferModal(offer: any) {
    this.editingOffer = true;
    this.selectedOffer = offer;
    this.offerTitle = offer.title;
    this.offerDescription = offer.description;
    const modalElement = document.getElementById('offerModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  saveOffer() {
    if (this.editingOffer) {
      this.selectedOffer.title = this.offerTitle;
      this.selectedOffer.description = this.offerDescription;
    } else {
      this.offers.push({ title: this.offerTitle, description: this.offerDescription });
    }
    const modalElement = document.getElementById('offerModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
  }

  deleteOffer(offer: any) {
    this.offers = this.offers.filter(o => o !== offer);
  }
}
