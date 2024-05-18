import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-coach-management',
  templateUrl: './coach-management.component.html',
  styleUrls: ['./coach-management.component.css']
})
export class CoachManagementComponent {
  coaches = [
    { name: 'Coach 1', specialty: 'Strength Training' },
    { name: 'Coach 2', specialty: 'Cardio' }
  ];
  coachName: string = '';
  coachSpecialty: string = '';
  editingCoach: boolean = false;
  selectedCoach: any;

  openAddCoachModal() {
    this.editingCoach = false;
    this.coachName = '';
    this.coachSpecialty = '';
    const modalElement = document.getElementById('coachModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  openEditCoachModal(coach: any) {
    this.editingCoach = true;
    this.selectedCoach = coach;
    this.coachName = coach.name;
    this.coachSpecialty = coach.specialty;
    const modalElement = document.getElementById('coachModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  saveCoach() {
    if (this.editingCoach) {
      this.selectedCoach.name = this.coachName;
      this.selectedCoach.specialty = this.coachSpecialty;
    } else {
      this.coaches.push({ name: this.coachName, specialty: this.coachSpecialty });
    }
    const modalElement = document.getElementById('coachModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
  }

  deleteCoach(coach: any) {
    this.coaches = this.coaches.filter(c => c !== coach);
  }
}
