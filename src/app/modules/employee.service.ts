import { Injectable } from '@angular/core';
import { UserContact } from './user-contact.modal';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  usercontacts: UserContact[] = [{
    id: 0,
    firstname: 'Alex',
    lastname: 'BlaBla',
    email: 'rahul@gamil.com',
    contact: 1234567890
  },
  {
    id: 1,
    firstname: 'Otto',
    lastname: 'Blubb',
    email: 'rosan@gmail.com',
    contact: 7674373467
  },
  {
    id: 2,
    firstname: 'Peter',
    lastname: 'Pan',
    email: 'abc@gmail.com',
    contact: 3759265835
  }];

  create(usercontact:UserContact) {
    const itemIndex = this.usercontacts.length;
    this.usercontacts[itemIndex] = usercontact;
  }

  delete(usercontact: UserContact) {
    this.usercontacts.splice(this.usercontacts.indexOf(usercontact), 1);
  }

  getall(): UserContact[] {
    return this.usercontacts;
  }

}
