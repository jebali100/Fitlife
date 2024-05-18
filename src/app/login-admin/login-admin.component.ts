import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Logique de validation simple pour démonstration
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/rooms']);
    } else {
      alert('Invalid username or password');
    }
  }
}
