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

    this.employeeService.GetEmployee(this.id).subscribe((data) => {
      const date = data.data;
      date.createdDate = new Date(date.createdDate!).toLocaleDateString(
        'pt-BR'
      );
      date.modifiedDate = new Date(date.modifiedDate!).toLocaleDateString(
        'pt-BR'
      );
      this.employee = date;
    });
  }
  ShutDownEmployee() {
    this.employeeService.ShutDownEmployee(this.id).subscribe((data) => {
      this.router.navigate(['']);
    }
    );
  }
}
