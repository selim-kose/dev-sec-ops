import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink  } from '@angular/router';
import { UserInput } from './components/user-input/user-input';
import { UserDelete } from "./components/user-delete/user-delete";
import { UserUpdate } from "./components/user-update/user-update";
import { UserList } from "./components/user-list/user-list";
import { Navigation } from './components/navigation/navigation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserInput, UserDelete, UserUpdate, UserList, Navigation],
  template: `
    <main class="main">
      <h1>Welcome to ex-devSecOps!</h1>
      <app-navigation></app-navigation>
      <div class="user-management"> 
      </div>
    </main>

    <router-outlet /> 
    `,
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
