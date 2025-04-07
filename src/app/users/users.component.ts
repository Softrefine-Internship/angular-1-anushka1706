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
  saveToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
  getCardStyle(user: UserModel) {
    return {
      'background-image': `linear-gradient(to bottom, ${user.color} 0%, ${user.color} 30%, transparent 30%, white 100%)`
    };
  }

  saveUser(user: UserModel) {
    const fieldsToValidate = ['name', 'email', 'phone', 'age', 'img'];
    const isInvalid = fieldsToValidate.some(field => this.isInputInvalid(user, field));

    if (isInvalid) {
      alert('Please correct the input errors before saving.');
      return;
    }

    user.isEditing = false;
    this.saveToLocalStorage();
  }
  isInputInvalid(user: UserModel, field: string): boolean {
    const value = user[field as keyof UserModel];

    switch (field) {
      case 'name':
      case 'email':
      case 'img':
        return typeof value !== 'string' || value.trim().length < 3;

      case 'phone':
        return typeof value !== 'string' || value.trim().length !== 10 || isNaN(Number(value));

      case 'age':
        return typeof value !== 'number' || value < 1 || value > 120;

      default:
        return false;
    }
  }


}
