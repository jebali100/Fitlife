import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css']
})
export class ListRoomComponent {
  rooms = [
    { name: 'Room 1' },
    { name: 'Room 2' },
    { name: 'Room 3' }
  ];
  selectedRoom: any;
  roomName: string = '';
  editingRoom: boolean = false;

  openAddRoomModal() {
    this.editingRoom = false;
    this.roomName = '';
    const modalElement = document.getElementById('roomModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  openEditRoomModal(room: any) {
    this.editingRoom = true;
    this.selectedRoom = room;
    this.roomName = room.name;
    const modalElement = document.getElementById('roomModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  saveRoom() {
    if (this.editingRoom) {
      this.selectedRoom.name = this.roomName;
    } else {
      this.rooms.push({ name: this.roomName });
    }
    const modalElement = document.getElementById('roomModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
  }

  deleteRoom(room: any) {
    this.rooms = this.rooms.filter(r => r !== room);
  }
}
