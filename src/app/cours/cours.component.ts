import { Component } from '@angular/core';
import { Course } from '../models/course.model'; // Assurez-vous que le chemin est correct
import { Member } from '../models/member.model'; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent {
  courses: Course[] = [
    {
      image: 'assets/images/yoga.jpg',
      name: 'Yoga',
      level: 'Beginner',
      date: new Date().toISOString().substring(0, 10),
      time: '10:00',
      detail: 'A relaxing yoga session',
      coach: 'Alice Johnson',
      members: [] // Initialisez avec un tableau vide
    },
    {
      image: 'assets/images/course2.jpg',
      name: 'Pilates',
      level: 'Intermediate',
      date: new Date().toISOString().substring(0, 10),
      time: '12:00',
      detail: 'A challenging pilates session',
      coach: 'John Doe',
      members: [] // Initialisez avec un tableau vide
    },
    {
      image: 'assets/images/course3.jpg',
      name: 'Spinning',
      level: 'Advanced',
      date: new Date().toISOString().substring(0, 10),
      time: '14:00',
      detail: 'An intense spinning session',
      coach: 'Emily Smith',
      members: [] // Initialisez avec un tableau vide
    }
  ];

  reserve(course: Course) {
    // Logique pour réserver le cours
    console.log(`Réserver le cours: ${course.name}`);
  }
}
