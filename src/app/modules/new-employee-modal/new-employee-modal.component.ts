import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { UserContact } from '../user-contact.modal';

@Component({
  selector: 'app-new-employee-modal',
  templateUrl: './new-employee-modal.component.html',
  styleUrls: ['./new-employee-modal.component.css']
})
export class NewEmployeeModalComponent implements OnInit {
  
  @Output() getEmployeeDetail = new EventEmitter<UserContact>(); 
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  employeeForm: FormGroup;
  
  constructor(private fb: FormBuilder,private employeeService:EmployeeService, public modalRef: BsModalRef) {
    this.createForm();
  }

  ngOnInit() {
  }

  get form() { return this.employeeForm.controls; }

  createForm() {
    this.employeeForm = this.fb.group({
      email: ["",[ Validators.required, Validators.pattern(this.emailRegex)]],
      contact: ["", [Validators.required, Validators.pattern(this.mobNumberPattern)]],
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],

    });
  }

  addEmployee() {
    this.employeeService.create(this.employeeForm.value);
    this.getEmployeeDetail.emit();
    this.modalRef.hide();
  }
}
