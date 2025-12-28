import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink  } from '@angular/router';
import { Navigation } from './components/navigation/navigation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation],
  template: `
    <main class="main">
      <h1>Welcome to User Management!</h1>
      <app-navigation></app-navigation>
    </main>

    <router-outlet /> 
    `,
  styles: `
    .main {
      margin-bottom: 2rem;
      max-width: 50rem;
    }
  `,
})
export class App {
  protected readonly title = signal('ex-devSecOps');
}
