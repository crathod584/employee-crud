import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

import { EmployeeService } from '../employee.service';
import { NewEmployeeModalComponent } from '../new-employee-modal';
import { UserContact } from '../user-contact.modal';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  modalRef: BsModalRef;
  employeeData:UserContact[];
  
  constructor(private modalService: BsModalService, private employeeService:EmployeeService) { }

  ngOnInit() {
    this.getData();
  }
  
  openModal() {

    let config: ModalOptions = {
      class: 'modal-dialog modal-lg',    
    }

    this.modalRef = this.modalService.show(NewEmployeeModalComponent,config);
  }

  getData(){
   this.employeeData = this.employeeService.getall();
  }

  deleteUserContact(usercontact: UserContact) {
    this.employeeService.delete(usercontact);
  }
}
