import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent {
  products = [
    { name: 'Product 1', price: 100 },
    { name: 'Product 2', price: 200 }
  ];
  productName: string = '';
  productPrice: number = 0;
  editingProduct: boolean = false;
  selectedProduct: any;

  openAddProductModal() {
    this.editingProduct = false;
    this.productName = '';
    this.productPrice = 0;
    const modalElement = document.getElementById('productModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  openEditProductModal(product: any) {
    this.editingProduct = true;
    this.selectedProduct = product;
    this.productName = product.name;
    this.productPrice = product.price;
    const modalElement = document.getElementById('productModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  saveProduct() {
    if (this.editingProduct) {
      this.selectedProduct.name = this.productName;
      this.selectedProduct.price = this.productPrice;
    } else {
      this.products.push({ name: this.productName, price: this.productPrice });
    }
    const modalElement = document.getElementById('productModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
  }

  deleteProduct(product: any) {
    this.products = this.products.filter(p => p !== product);
  }
}
