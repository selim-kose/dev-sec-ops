import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink],
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/add">Add</a>
      <a routerLink="/remove">Remove</a>
      <a routerLink="/update">Update</a>
    </nav>
    
  `,
  styles: `
  nav {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    padding: 1rem;
  }
  `,
})
export class Navigation {

}
