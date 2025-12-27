import { Component, signal } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  template: `
    <h2>Add new user</h2>
    <div class="container-inputs">
      <label for="firstName">First Name:</label>
      <input type="text" placeholder="Enter first name..." [(ngModel)]="firstName" />
      <label for="lastName">Last Name:</label>
      <input type="text" placeholder="Enter last name..." [(ngModel)]="lastName" />
      <label for="email">Email:</label>
      <input type="text" placeholder="Enter email..." [(ngModel)]="email" />
      <button type="submit" (click)="submit()">Add User</button>
    </div>
  `,
  styles: `
    .container-inputs {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 20px;
      max-width: 300px;
    }
  `,
})
export class UserInput {
  firstName = '';
  lastName = '' ;
  email = '' ;  

  constructor(private userService: UserService) {}

  submit() {
    console.log('First Name:', this.firstName);
    console.log('Last Name:', this.lastName);
    console.log('Email:', this.email);

    const user: User = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    };

    this.userService.createUser(user).subscribe({
      next: (user) => {
        console.log('User created successfully:', user);
      },
      error: (error) => {
        console.error('Error creating user:', error);
      }
    });
  }
}
