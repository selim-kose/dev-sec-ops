import { Component, OnInit, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-user-list',
  imports: [],
  template: `
    <h2>Users</h2>
    <ul>
      @for(user of users(); track user.id) {
      <li data-testid="user">
        {{user.id}} - {{ user.firstName }} {{ user.lastName }} - {{ user.email }}
      </li>
      } @empty {
        <p>No users found.</p>
      }
    </ul>
  `,
  styles: ``,
})
export class UserList implements OnInit {
    users = signal<User[]>([]);
    text = signal('');
  
    constructor(private userService: UserService) {}
  
    ngOnInit(): void {
      this.userService.getUsers().subscribe({
        next: (data) => (this.users.set(data)),
        error: (err) => console.error('Error fetching users', err),
      });
      console.log('GetUserComponent initialized');
      console.log('Fetched users:', this.users());
  
        this.userService.getText().subscribe(text => {
        this.text.set(text);
      });
    }

}
