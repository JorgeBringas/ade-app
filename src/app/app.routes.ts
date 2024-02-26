import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserAddComponent } from './components/users/add/user-add/user-add.component';
import { UserEditComponent } from './components/users/edit/user-edit/user-edit.component';
import { UserRevokeComponent } from './components/users/revoke/user-revoke/user-revoke.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'menu', component: MenuComponent, children: [
            { path: 'users', component: UserListComponent },
            { path: 'users/add', component: UserAddComponent },
            { path: 'users/edit/:id', component: UserEditComponent },
            { path: 'users/revoke/:id', component: UserRevokeComponent }
        ]
    }
];
