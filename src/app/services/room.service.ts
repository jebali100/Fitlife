import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private selectedRoomSource = new BehaviorSubject<any>(null);
  selectedRoom$ = this.selectedRoomSource.asObservable();

  setSelectedRoom(room: any) {
    this.selectedRoomSource.next(room);
  }
}
