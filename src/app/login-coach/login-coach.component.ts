import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-coach',
  templateUrl: './login-coach.component.html',
  styleUrls: ['./login-coach.component.css']
})
export class LoginCoachComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Simple validation logic for demonstration purposes
    if (this.username === 'coach' && this.password === 'coach') {
      this.router.navigate(['/rooms']);
    } else {
      alert('Invalid username or password');
    }
  }
}
