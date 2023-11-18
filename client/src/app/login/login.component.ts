import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/dashboard');
    }
  }
  arr = [
    { id: 1, name: 'Apple', describe: 'kingi', price: 1000 },
    { id: 2, name: 'Samsung', describe: 'tamtung', price: 700 },
    { id: 3, name: 'Xiaomi', describe: 'kinez', price: 450 },
  ];

  priceToChange = 10;
  phoneName = '';
  password = '';
  username = '';
  emptyValues = false;

  changePrice(selectedPhoneId: number, increasePrice: boolean) {
    for (let phone of this.arr) {
      if (selectedPhoneId === phone.id) {
        increasePrice ? (phone.price += 50) : (phone.price -= 50);
      }
    }
  }

  login() {
    if (this.username.length !== 0 && this.password.length !== 0) {
      this.emptyValues = false;
      this.authService.login(this.username, this.password).subscribe(
        (data) => {
          console.log(data);
          localStorage.setItem('token', JSON.stringify(data));
          this.router.navigateByUrl('/dashboard');
        },
        (err: any) => {
          console.log(err);
        }
      );
    } else {
      this.emptyValues = true;
    }
  }
}
