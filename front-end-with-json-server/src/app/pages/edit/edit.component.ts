import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  btnAction: string = 'Edit';
  btnTitle: string = 'Edit employee';
  employee!: Employee;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.employeeService.GetEmployee(id).subscribe((response) => {
      this.employee = response;
    });
  }

  editEmployee(employee: Employee): void {
    this.employeeService.EditEmployee(employee).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
