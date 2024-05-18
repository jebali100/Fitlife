import { Component } from '@angular/core';
import { Course } from '../models/course.model'; // Assurez-vous que le chemin est correct
import { Member } from '../models/member.model'; // Assurez-vous que le chemin est correct

declare var bootstrap: any;

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent {
  coachName: string = 'John Doe';
  profileImage: string | ArrayBuffer = '';
  courses: Course[] = [
    { 
      image: 'assets/course1.jpg', 
      name: 'Yoga', 
      level: 'Beginner', 
      date: new Date().toISOString().substring(0, 10), 
      time: '10:00', 
      detail: 'A relaxing yoga session', 
      coach: 'John Doe',
      members: [
        { firstName: 'Alice', lastName: 'Smith', email: 'alice@example.com' },
        { firstName: 'Bob', lastName: 'Johnson', email: 'bob@example.com' }
      ]
    },
    { 
      image: 'assets/course2.jpg', 
      name: 'Pilates', 
      level: 'Intermediate', 
      date: new Date().toISOString().substring(0, 10), 
      time: '12:00', 
      detail: 'A challenging pilates session', 
      coach: 'Jane Doe',
      members: [
        { firstName: 'Carol', lastName: 'Williams', email: 'carol@example.com' }
      ]
    },
    { 
      image: 'assets/course3.jpg', 
      name: 'Spinning', 
      level: 'Advanced', 
      date: new Date().toISOString().substring(0, 10), 
      time: '14:00', 
      detail: 'An intense spinning session', 
      coach: 'Emily Smith',
      members: [] // Initialisez avec un tableau vide
    }
  ];
  selectedCourse: Course | null = null;
  editingCourse: boolean = false;
  courseName: string = '';
  courseLevel: string = '';
  courseDate: string = '';
  courseTime: string = '';
  courseDetail: string = '';
  courseCoach: string = '';
  courseImage: string | ArrayBuffer = '';

  uploadImage(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.profileImage = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onCourseImageChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.courseImage = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  openAddCourseModal() {
    this.editingCourse = false;
    this.courseName = '';
    this.courseLevel = '';
    this.courseDate = '';
    this.courseTime = '';
    this.courseDetail = '';
    this.courseImage = '';
    this.courseCoach = this.coachName;
    const modalElement = document.getElementById('courseModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  openEditCourseModal(course: Course) {
    this.editingCourse = true;
    this.selectedCourse = course;
    this.courseName = course.name;
    this.courseLevel = course.level;
    this.courseDate = course.date;
    this.courseTime = course.time;
    this.courseDetail = course.detail;
    this.courseImage = course.image;
    this.courseCoach = course.coach;
    const modalElement = document.getElementById('courseModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  saveCourse() {
    if (this.editingCourse && this.selectedCourse) {
      this.selectedCourse.name = this.courseName;
      this.selectedCourse.level = this.courseLevel;
      this.selectedCourse.date = this.courseDate;
      this.selectedCourse.time = this.courseTime;
      this.selectedCourse.detail = this.courseDetail;
      this.selectedCourse.image = this.courseImage as string;
      this.selectedCourse.coach = this.courseCoach;
    } else {
      this.courses.push({ 
        name: this.courseName, 
        level: this.courseLevel, 
        date: this.courseDate, 
        time: this.courseTime, 
        detail: this.courseDetail, 
        image: this.courseImage as string,
        coach: this.courseCoach,
        members: [] // Initialisez avec un tableau vide
      });
    }
    const modalElement = document.getElementById('courseModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
  }

  deleteCourse(course: Course) {
    this.courses = this.courses.filter(c => c !== course);
  }

  viewMembers(course: Course) {
    this.selectedCourse = course;
    const modalElement = document.getElementById('membersModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
}
