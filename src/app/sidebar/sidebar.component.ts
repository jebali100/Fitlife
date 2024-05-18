import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  rooms = [
    { name: 'Room 1' },
    { name: 'Room 2' },
    { name: 'Room 3' }
  ];
  selectedRoom: any;
  roomName: string = '';
  editingRoom: boolean = false;

  selectRoom(room: any) {
    this.selectedRoom = room;
  }

  openAddRoomModal() {
    this.editingRoom = false;
    this.roomName = '';
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

  editRoom(room: any) {
    this.editingRoom = true;
    this.selectedRoom = room;
    this.roomName = room.name;
    const modalElement = document.getElementById('roomModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  deleteRoom(room: any) {
    this.rooms = this.rooms.filter((r: any) => r !== room);
    if (this.selectedRoom === room) {
      this.selectedRoom = null;
    }
  }
}
