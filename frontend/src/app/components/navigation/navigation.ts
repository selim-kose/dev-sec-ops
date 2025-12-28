import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterOutlet],
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
  }
  `,
})
export class Navigation {

}
