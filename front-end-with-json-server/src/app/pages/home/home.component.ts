import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/components/delete/delete.component';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  employees: Employee[] = [];
  genEmployee: Employee[] = [];

  columnsToDisplay = [
    'Active',
    'Name',
    'LastName',
    'Department',
    'Actions',
    'Delete',
  ];

  constructor(
    private employeeService: EmployeeService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.employeeService.GetEmployees().subscribe((data) => {
      const datas = data;
      datas.map((item) => {
        item.createdDate = new Date(item.createdDate!).toLocaleDateString(
          'pt-BR'
        );
        item.modifiedDate = new Date(item.modifiedDate!).toLocaleDateString(
          'pt-BR'
        );
      });
      //console.log(datas)
      this.employees = data;
      this.genEmployee = data;

      //console.log(this.employee)
      // console.log(this.genEmployee)
    });
  }
  search(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();
    console.log(value);
    this.employees = this.genEmployee.filter((employee) => {
      return employee.name.toLowerCase().includes(value);
    });
  }
  OpenDialog(id: number) {
    this.dialog.open(DeleteComponent, {
      width: '450px',
      height: "450px",
      data: {
        id : id
      }
    });
  }
}