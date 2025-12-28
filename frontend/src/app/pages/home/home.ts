import { Component } from '@angular/core';
import { UserList } from '../../components/user-list/user-list';

@Component({
  selector: 'app-home',
  imports: [UserList],
  template: `
    <app-user-list></app-user-list>
  `,
  styles: ``,
})
export class Home {

}
