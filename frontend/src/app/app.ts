import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserInput } from './components/user-input/user-input';
import { UserDelete } from "./components/user-delete/user-delete";
import { UserUpdate } from "./components/user-update/user-update";
import { UserList } from "./components/user-list/user-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserInput, UserDelete, UserUpdate, UserList],
  template: `
    <main class="main">
      <h1>Welcome to ex-devSecOps!</h1>
      <app-user-list></app-user-list>
      <div class="user-management"> 
        <app-user-input></app-user-input>
        <app-user-delete></app-user-delete>
        <app-user-update></app-user-update>
      </div>
    </main>

    <router-outlet /> `,
  styles: `
    .user-management {
      display: flex;
      gap: 50px;
      margin-top: 30px;
    }
  `,
})
export class App {
  protected readonly title = signal('ex-devSecOps');
}
