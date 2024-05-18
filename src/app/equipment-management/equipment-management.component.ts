import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-equipment-management',
  templateUrl: './equipment-management.component.html',
  styleUrls: ['./equipment-management.component.css']
})
export class EquipmentManagementComponent {
  equipments = [
    { name: 'Treadmill', quantity: 10 },
    { name: 'Dumbbell', quantity: 50 }
  ];
  equipmentName: string = '';
  equipmentQuantity: number = 0;
  editingEquipment: boolean = false;
  selectedEquipment: any;

  openAddEquipmentModal() {
    this.editingEquipment = false;
    this.equipmentName = '';
    this.equipmentQuantity = 0;
    const modalElement = document.getElementById('equipmentModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  openEditEquipmentModal(equipment: any) {
    this.editingEquipment = true;
    this.selectedEquipment = equipment;
    this.equipmentName = equipment.name;
    this.equipmentQuantity = equipment.quantity;
    const modalElement = document.getElementById('equipmentModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  saveEquipment() {
    if (this.editingEquipment) {
      this.selectedEquipment.name = this.equipmentName;
      this.selectedEquipment.quantity = this.equipmentQuantity;
    } else {
      this.equipments.push({ name: this.equipmentName, quantity: this.equipmentQuantity });
    }
    const modalElement = document.getElementById('equipmentModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
  }

  deleteEquipment(equipment: any) {
    this.equipments = this.equipments.filter(e => e !== equipment);
  }
}
