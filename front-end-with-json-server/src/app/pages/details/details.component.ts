import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  employee?: Employee;
  id!: number;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));

    this.employeeService.GetEmployee(this.id).subscribe((response) => {
      const employee = response;
      if (employee) {
        employee.createdDate = new Date(employee.createdDate!).toLocaleDateString('pt-BR');
        employee.modifiedDate = new Date(employee.modifiedDate!).toLocaleDateString('pt-BR');
        this.employee = employee;
      }
    });
  }

  shutDownEmployee(): void {
    this.employeeService.ShutDownEmployee(this.id).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
