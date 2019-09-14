import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
})
export class LogoutComponent {
  @Input() loggedOut: true;


}
