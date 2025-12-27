import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-update',
  imports: [FormsModule],
  template: `
    <h2>Update user</h2>
    <div class="container-input-update">
      <label for="userId">User Id:</label>
      <input type="text" placeholder="Enter user ID..." [(ngModel)]="userId" />
      <label for="firstName">First Name:</label>
      <input type="text" placeholder="Enter first name..." [(ngModel)]="firstName" />
      <label for="lastName">Last Name:</label>
      <input type="text" placeholder="Enter last name..." [(ngModel)]="lastName" />  
      <label for="email">Email:</label>
      <input type="text" placeholder="Enter email..." [(ngModel)]="email" />
      <button type="submit" (click)="updateUser()">Update User</button>
    </div>
  `,
  styles: `
      .container-input-update {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 20px;
      max-width: 300px;
    }
  `,
})
export class UserUpdate {
  userId = '';
  firstName = '';
  lastName = '';
  email = '';

  constructor(private userService: UserService) {}

  updateUser() {
    const updatedUser: User = {
      id: +this.userId,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    };

    this.userService.updateUser(this.userId, updatedUser).subscribe({
      next: (user) => {
        console.log('User updated successfully:', user);
      },
      error: (error) => {
        console.error('Error updating user:', error);
      }
    });
  }

}