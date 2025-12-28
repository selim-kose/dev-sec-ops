import { Component } from '@angular/core';
import { UserDelete } from '../../components/user-delete/user-delete';

@Component({
  selector: 'app-remove-user',
  imports: [UserDelete],
  template: `
    <app-user-delete></app-user-delete>
  `,
  styles: ``,
})
export class RemoveUser {

}
