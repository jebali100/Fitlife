import { Component, OnInit } from '@angular/core';

interface Coach {
  image: string;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  coaches: Coach[] = [
    {
      image: 'assets/images/coach1.jpg',
      firstName: 'Alice',
      lastName: 'Johnson'
    },
    {
      image: 'assets/images/coach2.jpg',
      firstName: 'John',
      lastName: 'Doe'
    },
    {
      image: 'assets/images/coach3.jpg',
      firstName: 'Emily',
      lastName: 'Smith'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
