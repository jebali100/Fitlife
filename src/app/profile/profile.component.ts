import { Component, OnInit } from '@angular/core';

interface Course {
  name: string;
  date: Date;
}

interface Order {
  productName: string;
  status: string;
}

interface Member {
  name: string;
  photo: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  member: Member = {
    name: 'John Doe',
    photo: 'assets/profile-photo.jpg'
  };

  reservedCourses: Course[] = [
    { name: 'Yoga', date: new Date() },
    { name: 'Pilates', date: new Date() }
  ];

  orders: Order[] = [
    { productName: 'Protein Shake', status: 'Delivered' },
    { productName: 'Gym Bag', status: 'In Transit' }
  ];

  constructor() {}

  ngOnInit(): void {}

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.member.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
