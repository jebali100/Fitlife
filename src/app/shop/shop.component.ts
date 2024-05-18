import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products = [
    {
      image: 'assets/images/creatine.jpg',
      name: 'Creatine',
      price: 150,
      description: 'La créatine améliore les capacités physiques en cas de séries successives d’exercices très intenses de courte durée chez les adultes effectuant des exercices physiques très intenses'
    },
    {
      image: 'assets/images/wheyprot.jpg',
      name: 'Whey Proteine',
      price: 100,
      description: ' C’est une protéine de haute valeur biologique aux qualités nutritionnelles totalement préservées extraite à froid à partir d’une source laitière ultra-pure et d’origine contrôlée.'
    },
    {
      image: 'assets/images/extreme.jpg',
      name: 'Extreme Pre Workout',
      price: 75,
      description: 'Ce Pre Workout fait partie de la classe des Pre Workout Boosters. Son utilisation doit être réservée à un usage épisodique pour lutter contre une fatigue passagère ou avant une épreuve sportive et une compétition.'
    },
    {
      image: 'assets/images/citruline.jpg',
      name: 'Citruline',
      price: 60,
      description: 'La citrulline est un acide aminé non essentiel que le corps sait synthétiser. Elle est naturellement présente dans certains aliments, dont la pastèque, où elle a été isolée pour la première fois.'
    },
    {
      image: 'assets/images/equipment1.jpg',
      name: 'Treadmill',
      price: 799.99,
      description: 'High-quality treadmills for effective cardio workouts.'
    },
    {
      image: 'assets/images/equipment1.jpg',
      name: 'Treadmill',
      price: 799.99,
      description: 'High-quality treadmills for effective cardio workouts.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
