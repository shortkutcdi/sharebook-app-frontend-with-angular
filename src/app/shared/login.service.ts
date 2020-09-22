import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logout() {
      throw new Error("Method not implemented.");
  }
}
