import { Component, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  username: any;
  email: any;
  password: any;
  telephone: any;
  address: any;

  @Input() loggedOut: true;

  constructor(private modalService: NgbModal) {}

  openRegister(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-register'});
  }

  submit() {
    console.log(this.username);
    console.log(this.email);
    console.log(this.password);
    console.log(this.telephone);
    console.log(this.address);
    this.modalService.dismissAll();
  }

}
