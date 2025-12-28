import { Component } from '@angular/core';
import { UserInput } from '../../components/user-input/user-input';

@Component({
  selector: 'app-add-user',
  imports: [UserInput],
  template: `
    <app-user-input></app-user-input>
  `,
  styles: ``,
})
export class AddUser {

}
