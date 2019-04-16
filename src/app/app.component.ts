import { Component } from '@angular/core';
import { MsalService } from './services/msal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  constructor(private msalService: MsalService) {}

  useremail() {
    return this.msalService.getUserEmail();    
  }

  login() {
    this.msalService.login();
  }

  signup() {
    this.msalService.signup();
  }

  resetPassword() {
    this.msalService.resetPassword();
  }

  logout() {
    this.msalService.logout();
  }

  isUserLoggedIn() {
    return this.msalService.isLoggedIn();
  }

}
