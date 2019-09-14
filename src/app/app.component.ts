import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showLogin: boolean;
  showRegister: boolean;
  showLogout: boolean;
  user: null;

  constructor() {}

  ngOnInit() {
    if (this.user) {
      this.showLogin = false;
      this.showRegister = false;
      this.showLogout = true;
    } else {
      this.showLogin = true;
      this.showRegister = true;
      this.showLogout = false;
    }
  }

}
