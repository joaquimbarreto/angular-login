import { Component, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import User from '../../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})


export class LoginComponent {
username: string;
password: string;

@Input() user: User = {
  username: this.username,
  password: this.password
};

@Input() loggedOut: boolean;

  constructor(private modalService: NgbModal) {}

  openLogin(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-login'});
  }

  submit() {
    this.modalService.dismissAll();
  }


}
