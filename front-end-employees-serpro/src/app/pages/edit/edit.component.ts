import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

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

    this.employeeService.GetEmployee(id).subscribe((data) => {
      this.employee = data.data;
      console.log(this.employee);
    });
  }
  editEmployee(employee: Employee) {
    this.employeeService.EditEmployee(employee).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }
}
