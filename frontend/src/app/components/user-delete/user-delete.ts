import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-delete',
  imports: [FormsModule],
  template: `
    <h2>Delete user</h2>
    <label for="userId">User ID:</label>
    <input type="text" placeholder="Enter user ID..." [(ngModel)]="userId" />
    <button type="submit" (click)="deleteUser()">Delete User</button>
  `,
  styles: ``,
})
export class UserDelete {
   userId = '';

  constructor(private userService: UserService) {}

  deleteUser() {
    console.log('User ID to delete:', this.userId);
    if (this.userId === null) {
      console.error('User ID is required to delete a user.');
      return;
    }

    this.userService.deleteUser(this.userId).subscribe({
      next: () => {
        console.log('User deleted successfully');
      },
      error: (error) => {
        console.error('Error deleting user:', error);
      }
    });
  }

}