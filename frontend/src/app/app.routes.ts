import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AddUser } from './pages/add-user/add-user';
import { RemoveUser } from './pages/remove-user/remove-user';
import { UpdateUser } from './pages/update-user/update-user';   


export const routes: Routes = [
    {path: '', component: Home},
    {path: 'add', component: AddUser},
    {path: 'remove', component: RemoveUser},
    {path: 'update', component: UpdateUser},
];
