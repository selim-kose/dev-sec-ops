import { Component } from '@angular/core';
import { UserUpdate } from '../../components/user-update/user-update';

@Component({
  selector: 'app-update-user',
  imports: [UserUpdate],
  template: `
    <app-user-update></app-user-update>
  `,
  styles: ``,
})
export class UpdateUser {

}
