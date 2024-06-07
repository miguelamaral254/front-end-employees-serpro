import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Employee>();
  @Input() btnAction!: string;
  @Input() btnTitle!: string;
  @Input() employeeData: Employee | null = null;

  employeeForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      id: new FormControl(this.employeeData ? this.employeeData.id : 0),
      name: new FormControl(this.employeeData ? this.employeeData.name : '', [
        Validators.required,
      ]),
      lastName: new FormControl(
        this.employeeData ? this.employeeData.lastName : '',
        [Validators.required]
      ),
      department: new FormControl(
        this.employeeData ? this.employeeData.department : '',
        [Validators.required]
      ),
      shift: new FormControl(this.employeeData ? this.employeeData.shift : '', [
        Validators.required,
      ]),
      createdDate: new FormControl(new Date()),
      modifiedDate: new FormControl(new Date()),
      active: new FormControl(
        this.employeeData ? this.employeeData.active : true
      ),
    });
  }

  submit() {
    this.onSubmit.emit(this.employeeForm.value);
  }
}
