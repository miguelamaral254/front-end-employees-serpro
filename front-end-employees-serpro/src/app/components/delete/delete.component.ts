import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  inputData: any;
  employee!: Employee;
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<DeleteComponent>
  ) {}
  ngOnInit(): void {
    this.inputData = this.data;
    this.employeeService
      .GetEmployee(this.inputData.id)
      .subscribe((employee) => {
        this.employee = employee.data;
      });
  }

  DeleteEmployee() {
    this.employeeService.DeleteEmployee(this.inputData.id).subscribe((data) => {
      this.ref.close();
      window.location.reload();
    });
  }
  DeleteCancel() {
    this.ref.close();
  }
}
