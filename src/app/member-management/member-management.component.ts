import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-member-management',
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.css']
})
export class MemberManagementComponent {
  members = [
    { firstName: 'John', lastName: 'Doe', offer: 'Premium' },
    { firstName: 'Jane', lastName: 'Doe', offer: 'Basic' }
  ];
  firstName: string = '';
  lastName: string = '';
  offer: string = '';
  editingMember: boolean = false;
  selectedMember: any;

  openAddMemberModal() {
    this.editingMember = false;
    this.firstName = '';
    this.lastName = '';
    this.offer = '';
    const modalElement = document.getElementById('memberModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  openEditMemberModal(member: any) {
    this.editingMember = true;
    this.selectedMember = member;
    this.firstName = member.firstName;
    this.lastName = member.lastName;
    this.offer = member.offer;
    const modalElement = document.getElementById('memberModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  saveMember() {
    if (this.editingMember) {
      this.selectedMember.firstName = this.firstName;
      this.selectedMember.lastName = this.lastName;
      this.selectedMember.offer = this.offer;
    } else {
      this.members.push({ firstName: this.firstName, lastName: this.lastName, offer: this.offer });
    }
    const modalElement = document.getElementById('memberModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
  }

  deleteMember(member: any) {
    this.members = this.members.filter(m => m !== member);
  }
}
