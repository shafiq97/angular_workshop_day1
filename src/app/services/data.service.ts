import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Automatically provided to the root module
})
export class DataService {
  private readonly users: string[] = ['Alice', 'Bob', 'Charlie'];

  constructor() {}

  // Get all users
  getUsers(): string[] {
    return this.users;
  }

  // Add a new user
  addUser(name: string): void {
    this.users.push(name);
  }
}
