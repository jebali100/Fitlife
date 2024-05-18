import { Component, OnInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {
  admins = [
    { name: 'Admin 1' },
    { name: 'Admin 2' },
    { name: 'Admin 3' }
  ];
  adminName: string = '';
  editingAdmin: boolean = false;
  selectedAdmin: any;

  constructor() {}

  ngOnInit() {}

  openAddAdminModal() {
    this.editingAdmin = false;
    this.adminName = '';
    const modalElement = document.getElementById('adminModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  saveAdmin() {
    if (this.editingAdmin) {
      this.selectedAdmin.name = this.adminName;
    } else {
      this.admins.push({ name: this.adminName });
    }
    const modalElement = document.getElementById('adminModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
  }

  editAdmin(admin: any) {
    this.editingAdmin = true;
    this.selectedAdmin = admin;
    this.adminName = admin.name;
    const modalElement = document.getElementById('adminModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  deleteAdmin(admin: any) {
    this.admins = this.admins.filter(a => a !== admin);
  }
}
