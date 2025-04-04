import { Component } from '@angular/core';
import { UserModel, USERS } from './users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users: UserModel[] = [];
  originalUsers: UserModel[] = [];
  constructor() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    } else {
      this.users = USERS;
      this.saveToLocalStorage();
    }
  }
  editUser(user: UserModel) {
    const index = this.users.findIndex(u => u.id === user.id);
    this.originalUsers[index] = { ...user };
    user.isEditing = true;
  }
    cancel(user: UserModel) {
      const index = this.users.findIndex(u => u.id === user.id);
      const original = this.originalUsers[index];
      if (original) {
        user.name = original.name;
        user.email = original.email;
        user.phone = original.phone;
        user.age = original.age;
        user.img = original.img;
      }
      user.isEditing = false; 
    }
  saveUser(user: UserModel) {
    user.isEditing = false;
    this.saveToLocalStorage();
  }
  saveToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
  getCardStyle(user: UserModel) {
    return {
      'background-image': `linear-gradient(to bottom, ${user.color} 0%, ${user.color} 30%, transparent 30%, white 100%)`
    };
  }
}
